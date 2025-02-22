<?php
require_once __DIR__ . '/../../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';

session_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

// Retreive requested variable
$username = $_SESSION['username'] ?? '';
$firstLogin = $_SESSION['firstLogin'] ?? false;

// Return error if user is not logged in
if ($username) {
    echo json_encode([
        'username' => $username,
        'firstLogin' => $firstLogin
    ]);
} else {
    echo json_encode(['error' => 'No user is loggedin, therefore impossible got get username']);
    exit;
}

unset($_SESSION['firstLogin']);
