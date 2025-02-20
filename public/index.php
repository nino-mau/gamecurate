<?php
require_once __DIR__ . '/../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';

/** -- HANDLE ROUTING -- */

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$path = rtrim($path, '/');
$path = strtolower($path);

/** - Handle API requests - */

if (strpos($path, '/api/') === 0) {
    // Remove /api/ part from URL to get endpoint file name
    $endpoint = str_replace('/api/', '', $path);
    // Build the backend file path (adjust directory as needed)
    $endpointFile = __DIR__ . '/../src/php/endpoints/' . $endpoint;
    if (file_exists($endpointFile)) {
        require $endpointFile;
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'API endpoint not found']);
    }
    exit;
}

/** - Handle POST requests */

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    switch ($path) {
        case '/login-actions':
            require PHP_PATH . '/login-actions.php';
            exit;
        case '/register-actions':
            require PHP_PATH . '/registration-actions.php';
            exit;
        default:
            http_response_code(404);
            require VIEWS_PATH . '/404.php';
            exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <meta name="GameCurate" content="Your site description." />

    <!---- Stylesheet ---->
    <link rel="stylesheet" media="all" data-link-main-css>

    <!---- Line Awesome ---->
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <!---- Hover.css ---->
    <link rel="stylesheet" data-link-hover-css>

    <!---- Animate.css ---->
    <link rel="stylesheet" data-link-animate-css>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

    <!---- Swiper stylesheet ---->
    <link rel="stylesheet" data-link-swiper-css>

    <!---- Custome stylesheet ---->
    <link rel="stylesheet" media="all" data-link-custom-css>

    <!---- Ionicons ---->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <!---- Phosphor Icons ---->
    <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>

    <!---- Bootstrap and Popper.js ---->
    <!-- <script data-script-popperjs defer></script>
    <script data-script-bootstrap defer></script> -->

    <!---- Swiper ---->
    <!-- <script type="module" data-script-swiper defer></script> -->

    <!---- Scripts ---->
    <!-- <script type="module" data-custom-script defer></script> -->
    <script type="module" src="dist/main.js"></script>

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
    <link rel="icon" sizes="32x32" data-icon-favicon />

    <!---- Search Engine Optimization ---->
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="" />
</head>

<?php
/** -- HANDLE PAGES ROUTING -- */

switch ($path) {
    case '': // Root URL
    case '/index':
        require VIEWS_PATH . '/home.php';
        break;
    case '/games-list':
        require VIEWS_PATH . '/games-list.php';
        break;
    case '/login':
        require VIEWS_PATH . '/login.php';
        break;
    case '/login-success':
        require VIEWS_PATH . '/login.php';
        break;
    case '/logout':
        require VIEWS_PATH . '/logout.php';
        break;
    case '/register':
        require VIEWS_PATH . '/register.php';
        break;
    case '/profile':
        require VIEWS_PATH . '/profile.php';
        break;
    case '/register-success':
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
        require VIEWS_PATH . '/404.php';
        exit;
}
?>