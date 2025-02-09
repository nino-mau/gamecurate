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
    <link rel="stylesheet" href="/games-finder/node_modules/animate.css/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

    <!---- Custome stylesheet ---->
    <link rel="stylesheet" href="/games-finder/public/assets/css/custom-style.css" media="all">

    <!---- Ionicons ---->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <!---- Phosphor Icons ---->
    <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>

    <!---- Line Awesome ---->
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

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
    <link rel="icon" href="/games-finder/public/assets/img/icons/favicon.svg" sizes="32x32" />
    <link rel="apple-touch-icon" href="/games-finder/public/assets/img/icons/favicon.svg" />

    <!---- Search Engine Optimization ---->
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="" />
</head>

<body class="bg-dark">
    <nav class="header-navbar navbar navbar-expand-lg justify-content-center bg-primary custom-navbar" role="navigation">
        <a class="siteIcon d-flex align-items-center" href="/games-finder/public/index.php" aria-label="Games finder - go to home page">
            <img class="svg" src="/games-finder/public/assets/img/icons/site-icon.svg">
        </a>
        <ul class="nav">
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/games-finder/public/index.php" data-js-home-link>Home</a>
            </li>
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/games-finder/src/views/games-list.php" data-js-games-link>Games</a>
            </li>
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/games-finder/src/views/discover.php" data-js-discover-link>Discover</a>
            </li>
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/games-finder/src/views/contact.php" data-js-contact-link>Contact</a>
            </li>
        </ul>
        <div class="header-navbar__searchBar">
            <form class="form d-flex flex-row align-items-center justify-content-center">
                <input type="search"
                    class="form-control input"
                    placeholder="Search..."
                    aria-label="Search">
                <button class="btn button hvr-grow-rotate" type="submit">
                    <img src="/games-finder/public/assets/img/icons/search-icon-fa.svg" class="icon hvr-icon">
                </button>
            </form>
        </div>
        <?php if (empty($username)): ?>
            <a tabindex="0" class="account-menu user-menu--loggedout navbar-brand d-flex align-items-center ms-lg-9 me-0" data-bs-toggle="popover" role="button" aria-haspopup="true" aria-label="Open authentification menu">
                <img class="icons" src="/games-finder/public/assets/img/icons/user/UserAvatar.svg" aria-label="Logged-out state icon">
            </a>
        <?php else: ?>
            <a tabindex="0" class="account-menu user-menu--loggedin navbar-brand d-flex align-items-center ms-lg-9 me-0" data-bs-toggle="popover" role="button" aria-haspopup="true" aria-label="Open authentification menu">
                <img class="icons" src="/games-finder/public/assets/img/icons/user/UserAvatarFilled.svg" aria-label="Logged-in state icon">
            </a>
        <?php endif; ?>
    </nav>