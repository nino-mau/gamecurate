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

/** - Handle page requests - */

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
        require VIEWS_PATH . '/index.php';
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
