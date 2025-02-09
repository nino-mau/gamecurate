<?php
require_once 'db-functions.php';


/** -- STORE TABLEs FROM DB IN JSON FILEs -- */

$gamesJsonFile = $_SERVER['DOCUMENT_ROOT'] . '/games-finder/data/games.json';
$usersJsonFile = $_SERVER['DOCUMENT_ROOT'] . '/games-finder/data/users.json';

// Export games table
dbTableToJson('games', $gamesJsonFile);

// Export users table
dbTableToJson('users', $usersJsonFile);
