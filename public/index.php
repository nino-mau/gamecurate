<?php
require_once __DIR__ . '/../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
include INCLUDES_PATH . '/header.php';


/** --- HANDLE ROUTING --- */
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

switch ($path) {
    case '/':
    case '/index.php':
        // Home page (you might have content directly in index.php or include a home view)
        require VIEWS_PATH . '/index_view.php'; // Assuming you have a home view
        break;
    case '/gamesList':
        require VIEWS_PATH . '/games-list.php';
        break;
    case '/login':
        require VIEWS_PATH . '/login.php';
        break;
    case '/logout':
        require VIEWS_PATH . '/login.php';
        break;
    case '/register':
        require VIEWS_PATH . '/register.php';
        break;
    case '/profile':
        require VIEWS_PATH . '/profile.php';
        break;
    case '/registerSuccess':
        require VIEWS_PATH . '/register-success.php';
        break;
    case '/discover':
        require VIEWS_PATH . '/discover.php';
        break;
    case '/contact':
        require VIEWS_PATH . '/contact.php';
        break;
    default:
        http_response_code(404);
        echo "404 Not Found";
        break;
}

?>

<main class="home-main">
    <h1 class="home-title text-light">
        <a class="firstLink text-light animate__animated" href="/gamesList">Discover</a>
        <span class="middleText animate__animated">your next</span>
        <a class="secondLink text-light animate__animated" href="/discover" data-replace="favorite game !">
            <span>favorite game !</span>
        </a>
    </h1>
    <div class="home-video d-flex justify-content-center">
        <div class="video-wrapper swing-in-top-fwd">
            <video class="video" autoplay muted loop playsinline>
                <source src="/assets/video/home-illustration.mp4">
            </video>
        </div>
    </div>
    <div class="home-button d-flex justify-content-center">
        <a href="/discover" class="btn">Discover</a>
    </div>
</main>

<?php
include INCLUDES_PATH . '/footer.php';
?>