<?php
session_start();

// Unset all session variables
$_SESSION = [];

// Destroy the session
session_destroy();

// Redirect to login page
// header("Location: " . $_SERVER['DOCUMENT_ROOT'] . "/games-finder/public/index.php");
header("Location: login.php");
exit;


