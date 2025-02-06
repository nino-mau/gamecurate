<?php 
require_once 'db-functions.php';

session_start();

// If Form is submited execute function to add user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $formData = [
        'username' => trim($_POST['registerUsername']) ?? '',
        'email' => trim($_POST['registerEmail']) ?? '',
        'pwd' => trim($_POST['registerPassword']) ?? '',
        'confirmPwd' => trim($_POST['registerConfirmPassword']) ?? ''
    ];
    
    registerUser($formData);
}

