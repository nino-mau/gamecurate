<?php
require_once $ROOT.'/games-finder/src/php/db-functions.php';

// Start session
session_start();

$username = $_SESSION['username'] ?? '';
$token = $_COOKIE['remember'] ?? '';

// Handle cookie auto-login
if (!$username AND $token) {
    autoCookieLogin($token);
}
?>

<!DOCTYPE html>
<html lang="en-US" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
        <meta name="GamesFinder" content="Your site description." />

        <!---- JQuery ---->
        <script src="/games-finder/node_modules/jquery/dist/jquery.min.js"></script>

        <!---- Bootstrap and Popper.js ---->
        <script src="/games-finder/node_modules/@popperjs/core/dist/umd/popper.min.js" defer></script>
        <script src="/games-finder/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" defer></script>

        <!---- Ionicons ---->
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        <!---- Phosphor Icons ---->
        <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
        
        <!---- Scripts and Stylesheets ---->
        <link rel="stylesheet" href="/games-finder/public/assets/css/main.css" media="all">
        <script src="/games-finder/public/assets/js/scripts.js" async defer></script>
        
        <!---- Social Meta Tags ---->
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="images/hom-banner-compressed.jpg" />
        
        <!---- Twitter Meta Tags ---->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="images/hom-banner-compressed.jpg" />
        
        <!---- Favicons ---->
        <link rel="icon" href="/games-finder/public/assets/img/icons/main-icon-white.svg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/games-finder/public/assets/img/icons/main-icon.svg" />
        
        <!---- Search Engine Optimization ---->
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="" />
    </head>
    <body class="bg-dark">
        <nav class="navbar navbar-expand-lg justify-content-center bg-primary custom-navbar">  
            <a class="navbar-brand d-flex align-items-center" href="#">
                <!-- <ion-icon class="custom-navbar__icons text-secondary" name="game-controller-outline"></ion-icon> -->
                <img class="custom-navbar__icons" src="/games-finder/public/assets/img/icons/main-icon-white.svg">
            </a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="#">Games</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-secondary" aria-disabled="true">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-secondary" aria-disabled="true">Contact</a>
                </li>
            </ul>
        <?php if(empty($username)): ?>
            <a tabindex="0" class="user-menu user-menu--loggedout navbar-brand d-flex align-items-center ms-lg-9 me-0" data-bs-toggle="popover">
                <i class="icons text-secondary ph ph-user-circle"></i>
            </a>
        <?php else: ?>
            <a tabindex="0" class="user-menu user-menu--loggedin navbar-brand d-flex align-items-center ms-lg-9 me-0" data-bs-toggle="popover">
                <i class="icons text-secondary ph-fill ph-user-circle"></i>
            </a>       
        <?php endif; ?>
        </nav>