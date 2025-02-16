<?php
// Define path constants
define('ROOT_PATH', __DIR__ . '/..');
define('CONF_PATH', ROOT_PATH . '/conf');
define('LOGS_PATH', ROOT_PATH . '/logs');
define('PUBLIC_PATH', ROOT_PATH . '/public');
define('SRC_PATH', ROOT_PATH . '/src');
define('PHP_PATH', ROOT_PATH . '/src/php');
define('INCLUDES_PATH', ROOT_PATH . '/src/includes');
define('VIEWS_PATH', ROOT_PATH . '/src/views');
define('DATA_PATH', ROOT_PATH . '/data');

// Define HTTPS path constants
define('BASE_URL', 'http://gamecurate.local');

// Enable errors displa
error_reporting(E_ALL);
ini_set('display_errors', 1);
