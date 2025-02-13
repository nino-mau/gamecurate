<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
require PHP_PATH . '/db-functions.php';

session_start();

// Get username to use to clear 'remember me' token from db
$username = $_SESSION['username'] ?? '';

// Clear the session
$_SESSION = [];
session_destroy();

// Clear the 'remember me' cookie 
if (isset($_COOKIE['remember'])) {

    // Remove token from database
    $dbh = getDatabaseConnection();
    $stmt = $dbh->prepare("UPDATE users SET remember_token = NULL WHERE username = :username");
    $stmt->execute([':username' => $username]);

    setcookie('remember', '', time() - 3600, '/');
}

// Redirect to login page
// header("Location: " . $_SERVER['DOCUMENT_ROOT'] . "/games-finder/public/index.php");
header('Location: ' . BASE_URL . '/src/views/login.php');
exit;
