<?php
require_once $ROOT . '/games-finder/src/php/db-functions.php';

// Start session
session_start();

$username = $_SESSION['username'] ?? '';
$token = $_COOKIE['remember'] ?? '';

// Handle cookie auto-login
if (!$username and $token) {
    autoCookieLogin($token);
}
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <meta name="GamesFinder" content="Your site description." />

    <!---- Stylesheet ---->
    <link rel="stylesheet" href="/games-finder/public/assets/css/main.css" media="all">

    <!---- Hover.css ---->
    <link rel="stylesheet" href="/games-finder/node_modules/hover.css/css/hover-min.css">

    <!---- JQuery ---->
    <script src="/games-finder/node_modules/jquery/dist/jquery.min.js"></script>

    <!---- Bootstrap and Popper.js ---->
    <script src="/games-finder/node_modules/@popperjs/core/dist/umd/popper.min.js" defer></script>
    <script src="/games-finder/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" defer></script>

    <!---- Animate.css ---->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

    <!---- Ionicons ---->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <!---- Phosphor Icons ---->
    <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>

    <!---- Scripts ---->
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
    <nav class="header-navbar navbar navbar-expand-lg justify-content-center bg-primary custom-navbar" role="navigation">
        <a class="siteIcon d-flex align-items-center" href="/games-finder/public/index.php" aria-label="Games finder - go to home page">
            <svg class="svg" width="3rem" height="3rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11 2.774c0-.432.344-.774.77-.774H14V0h-2.23A2.769 2.769 0 009 2.774V5H5.55A5 5 0 00.573 9.516l-.557 5.737a3.416 3.416 0 006.712 1.17l.073-.291A1.5 1.5 0 018.255 15h3.74a1.5 1.5 0 011.454 1.132l.098.386a3.288 3.288 0 006.46-1.124l-.569-5.876A5 5 0 0014.461 5H11V2.774zM6 7a1 1 0 011 1v1h1a1 1 0 110 2H7v1a1 1 0 11-2 0v-1H4a1 1 0 110-2h1V8a1 1 0 011-1zm7.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#fff" />
            </svg>
            <!-- <img class="svg" src="/games-finder/public/assets/img/icons/main-icon-white.svg" aria-hidden="true"> -->
        </a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active text-light" href="/games-finder/public/index.php">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="/games-finder/src/views/games-list.php">Games</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active text-light">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active text-light">Contact</a>
            </li>
        </ul>
        <?php if (empty($username)): ?>
            <a tabindex="0" class="user-menu user-menu--loggedout navbar-brand d-flex align-items-center ms-lg-9 me-0" data-bs-toggle="popover" role="button" aria-haspopup="true" aria-label="Open authentification menu">
                <i class="icons text-light ph ph-user-circle" role="img" aria-label="Logged-out state icon"></i>
            </a>
        <?php else: ?>
            <a tabindex="0" class="user-menu user-menu--loggedin navbar-brand d-flex align-items-center ms-lg-9 me-0" data-bs-toggle="popover" role="button" aria-haspopup="true" aria-label="Open authentification menu">
                <i class="icons text-light ph-fill ph-user-circle" role="img" aria-label="Logged-in state icon"></i>
            </a>
        <?php endif; ?>
    </nav>