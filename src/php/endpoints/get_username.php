<?php

session_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost/games-finder/public/'); 
header('Access-Control-Allow-Credentials: true');

// Retreive requested variable
$username = $_SESSION['username'] ?? '';

// Return error if user is not logged in
if ($username) {
    echo json_encode([
        'username' => $_SESSION['username']
    ]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Not authenticated']);
    exit;
} 





