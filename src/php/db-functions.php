<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';

// To use to connect to db
function getDatabaseConnection()
{
    $host = 'localhost';
    $dbname = 'gamecurate';
    $user = 'nino';
    $password = getenv('DB_PASSWORD');

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        throw new Exception('Connection failed: ' . $e->getMessage());
    }
}

// Function used to extract table and return them in form of php object
function getDbTable($tableName)
{
    try {
        $dbh = getDatabaseConnection();
        $stmt = $dbh->prepare("SELECT * FROM $tableName");
        $stmt->execute();
        $table = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $table;
    } catch (Exception $e) {
        return "Error: " . $e->getMessage();
    }
}

// Add registred users to db and handle form verif
function registerUser($userData)
{

    $username = $userData['username'];
    $email = $userData['email'];
    $pwd = $userData['pwd'];
    $confirmPwd = $userData['confirmPwd'];

    $errors = validateRegisterForm($username, $email, $pwd, $confirmPwd);

    // Verify if the pwd matches and the form is valid
    if (empty($errors)) {
        try {
            $dbh = getDatabaseConnection();

            $stmt = $dbh->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
            $stmt->execute([
                ':username' => $username,
                ':email' => $email,
                ':password' => password_hash($pwd, PASSWORD_DEFAULT),
            ]);
            header('Location: ' . BASE_URL . '/Register-success');
            exit;
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        // Pass errors and form content back to register page
        $_SESSION['errors'] = $errors;
        $_SESSION['formData'] = $userData;
        header('Location: ' . BASE_URL . '/Register');
        exit;
    }
}

// Handle logings 
function loginUser($userData)
{

    $username = $userData['username'];
    $pwd = $userData['pwd'];
    $remember = $userData['remember'];

    try {
        $dbh = getDatabaseConnection();

        $stmt = $dbh->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->execute([':username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($pwd, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            $_SESSION['firstLogin'] = true;
            setRememberCoockie($remember, $username);
            session_regenerate_id(true);
            header('Location: ' . BASE_URL . '/Index');
            exit;
        } else {
            $_SESSION['error'] = 'The email address or password was incorrect';
            $_SESSION['loginData'] = $userData;
            header('Location: ' . BASE_URL . '/Login-success');
            exit;
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Handle automatic logins with token stored in cookie
function autoCookieLogin($token)
{
    try {
        $dbh = getDatabaseConnection();

        $stmt = $dbh->prepare("SELECT username FROM users WHERE remember_token = :token");
        $stmt->execute([
            ':token' => $token
        ]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $_SESSION['username'] = $user['username'];
            $_SESSION['hasLoggedIn'] = true;
            header('Location: ' . BASE_URL . '/Index');
            exit;
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Handle form validation with visual feedback
function validateRegisterForm($username, $email, $pwd, $cpwd)
{
    $errors = [];

    // Username validation
    if (empty($username)) {
        $errors['username'] = 'Username is required';
    } elseif (!preg_match('/^[a-zA-Z ]+$/', $username)) {
        $errors['username'] = 'Invalid characters in username';
    }
    // Email validation
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }
    // Password validation
    if (empty($pwd)) {
        $errors['pwd'] = 'Password is required';
    } elseif (strlen($pwd) < 8) {
        $errors['pwd'] = 'Password must be at least 8 characters';
    }
    // Password confirm validation 
    if ($cpwd !== $pwd) {
        $errors['confirmPwd'] = 'Does not match the password';
    }
    return $errors;
}

// Handle creating 'remember me' cookies
function setRememberCoockie($remember, $username)
{
    if ($remember) {
        $token = bin2hex(random_bytes(32));
        $expire = time() + (86400 * 30); // 30 days

        // Store token in db
        try {
            $dbh = getDatabaseConnection();
            $stmt = $dbh->prepare("UPDATE users SET remember_token = :token WHERE username = :username");
            $stmt->execute([
                ':username' => $username,
                ':token' => $token
            ]);
            // Set remember cookie
            setcookie('remember', $token, $expire, '/');
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}

// Convert db table to json and store it in file
function dbTableToJson($dbTable, $jsonFile)
{
    try {
        $table = getDbTable($dbTable);
        $r = file_put_contents($jsonFile, json_encode($table, JSON_PRETTY_PRINT));
        if (! $r) {
            echo '<p>Failed to write Json file !</p>';
            exit;
        } else {
            echo '<p>Succesfuly exported table to Json file !</p>';
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
