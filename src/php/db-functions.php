<?php

// To use to connect to db
function getDatabaseConnection(){ 
    $host = 'localhost';
    $dbname = 'games-finder-db';
    $user = 'nino';
    // $password = 'D3c4p3%6P=U'; 
    $password = 'ddQqJ-9uCyFhGBo';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        throw new Exception('Connection failed: ' . $e->getMessage());
    }
}

// Add registred users to db and handle form verif
function registerUser($userData){ 
    
    $username = $userData['username'];
    $email = $userData['email'];
    $pwd = $userData['pwd'];
    $confirmPwd = $userData['confirmPwd'];

    $errors = validateRegisterForm($username, $email, $pwd, $confirmPwd);

    // Verify if the pwd matches and the form is valid
    if(empty($errors)) {
        try {
            $dbh = getDatabaseConnection();
            
            $stmt = $dbh->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
            $stmt->execute([
                ':username' => $username,
                ':email' => $email,
                ':password' => password_hash($pwd, PASSWORD_DEFAULT),
            ]);
            header('Location: /games-finder/src/views/register-success.php');
            exit;
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        // Pass errors and form content back to register page
        $_SESSION['errors'] = $errors;
        $_SESSION['formData'] = $userData;
        header('Location: /games-finder/src/views/register.php');
        exit;
    }
}

// Handle logings 
function loginUser($userData){
    
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
            setRememberCoockie($remember, $username);
            session_regenerate_id(true);
            header('Location: /games-finder/public/index.php');
            exit;
        } else {
            $_SESSION['error'] = 'The email address or password was incorrect';
            $_SESSION['loginData'] = $userData;
            header('Location: /games-finder/src/views/login.php');
            exit;
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage(); 
    }
}

// Handle automatic logins with token stored in cookie
function autoCookieLogin($token) {
    try {
        $dbh = getDatabaseConnection();
        
        $stmt = $dbh->prepare("SELECT username FROM users WHERE remember_token = :token");
        $stmt->execute([
            ':token' => $token
        ]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $_SESSION['username'] = $user['username'];
            header('Location: /games-finder/public/index.php');
            exit;
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Handle form validation with visual feedback
function validateRegisterForm($username, $email, $pwd, $cpwd){
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
function setRememberCoockie($remember, $username) {
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













