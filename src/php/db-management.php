<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
require __DIR__ . '/db-functions.php';


/** -- STORE TABLEs FROM DB IN JSON FILEs -- */

$gamesJsonFile = DATA_PATH . '/games.json';
$usersJsonFile = DATA_PATH . '/users.json';

// Export games table
dbTableToJson('games', $gamesJsonFile);

// Export users table
dbTableToJson('users', $usersJsonFile);
