<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
require __DIR__ . '/db-functions.php';

session_start();

// If Form is submited execute function to add user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $formData = [
        'username' => trim($_POST['loginUsername']) ?? '',
        'pwd' => trim($_POST['loginPassword']) ?? '',
        'remember' => trim($_POST['remember']) ?? ''
    ];

    loginUser($formData);
}
