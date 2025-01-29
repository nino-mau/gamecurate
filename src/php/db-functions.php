<?php

// To connect to db
function getDatabaseConnection() {
    $host = 'localhost';
    $dbname = 'games-finder-db';
    $user = 'games-finder';
    $password = 'D3c4p3%6P=U';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        throw new Exception('Connection failed: ' . $e->getMessage());
    }
}

function registerUser($userData) {
    
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
            header('Location: /games-finder/src/views/auth-success.php');
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        // Pass errors and form content back to auth page
        session_start();
        $_SESSION['errors'] = $errors;
        $_SESSION['formData'] = $userData;
        header('Location: /games-finder/src/views/auth.php');
        exit;
    }
}

function validateRegisterForm($username, $email, $pwd, $cpwd) {
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






