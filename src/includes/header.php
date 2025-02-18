<?php
require LOGS_PATH . '/errors_logging.php';
require PHP_PATH . '/db-functions.php';

// Start session
session_start();

$username = $_SESSION['username'] ?? '';
$token = $_COOKIE['remember'] ?? '';

// Handle cookie auto-login
if (!$username and $token) {
    autoCookieLogin($token);
}
?>

<body class="bg-dark">
    <!---- Success login modal ---->
    <div class="modal fade" tabindex="-1" aria-hidden="true" data-js-login-success-modal>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-success p-2 ps-3 pe-3 shadow">
                    <h4 class="modal-title text-light">Success !</h4>
                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center mt-3 fs-5">
                    <p data-js-login-success-modal-text></p>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </div>
    <nav class="header-navbar navbar navbar-expand-lg justify-content-center bg-primary custom-navbar" role="navigation">
        <a class="siteIcon d-flex align-items-center" href="/Index" aria-label="GameCurate - go to home page">
            <img class="svg" src="assets/img/icons/site-icon.svg">
        </a>
        <ul class="nav">
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/Index" data-js-home-link>Home</a>
            </li>
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/Games-list" data-js-games-link>Games</a>
            </li>
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/Discover" data-js-discover-link>Discover</a>
            </li>
            <li class="list-item">
                <a class="link active text-light hvr-underline-from-center" href="/Contact" data-js-contact-link>Contact</a>
            </li>
        </ul>
        <form class="search-bar col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" class="input form-control form-control-dark text-bg-dark text-light" placeholder="Search..." aria-label="Search">
        </form>
        <!-- <div class="searchBar">
            <form class="form d-flex flex-row align-items-center justify-content-center">
                <input type="search"
                    class="form-control input"
                    placeholder="Search..."
                    aria-label="Search">
                <button class="btn button hvr-grow-rotate" type="submit">
                    <img src="assets/img/icons/search-icon-fa.svg" class="icon hvr-icon">
                </button>
            </form>
        </div> -->
        <div class="accountDropdownContainer dropdown-center">
            <?php if (empty($username)): ?>
                <a tabindex="0"
                    class="account-menu user-menu--loggedout d-flex align-items-center me-0 dropdown-toggle link-body-emphasis"
                    data-bs-auto-close="outside"
                    data-bs-toggle="dropdown"
                    data-bs-reference="parent"
                    role="button"
                    aria-label="Open authentification dropdown"
                    aria-expanded="false">
                    <img class="svg" src="assets/img/icons/user/UserAvatar.svg" aria-label="Logged-out state icon">
                    <img class="chevron-down-svg" src="assets/img/icons/menu/chevron-down-icon.svg">
                </a>
                <div class="account-dropdown-menu p-2 dropdown-menu ">
                    <div class="d-grid gap-2">
                        <a type="button" href="/Login" class="btn btn-outline-primary rounded">Login</a>
                        <a type="button" href="/Register" class="btn btn-primary rounded">Sign-up</a>
                    </div>
                </div>
            <?php else: ?>
                <a tabindex=" 0"
                    class="account-menu user-menu--loggedin d-flex align-items-center me-0 dropdown-toggle link-body-emphasis"
                    data-bs-auto-close="outside"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-label="Open account dropdown"
                    aria-expanded="false">
                    <img class="svg" src="assets/img/icons/user/UserAvatarFilled.svg" aria-label="Logged-in state icon">
                    <img class="chevron-down-svg" src="assets/img/icons/menu/chevron-down-icon.svg">
                </a>
                <div class="account-dropdown-menu p-2 dropdown-menu ">
                    <div class="d-grid gap-2">
                        <h3 data-js-account-menu-title class="text-black"></h3>
                        <a type="button" href="/Profile" class="btn btn-outline-primary rounded">Profile</a>
                        <a type="button" href="/Logout" class="btn btn-primary rounded">Logout</a>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </nav>