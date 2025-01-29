<?php 
require_once 'db-functions.php';

// If Form is submited execute function to add user
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $formData = [
        'username' => trim($_POST['loginUsername']) ?? '',
        'pwd' => trim($_POST['loginPassword']) ?? ''
    ];

    loginUser($formData);
}


