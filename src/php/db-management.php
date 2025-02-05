<?php 
require_once 'db-functions.php';


/** -- STORE TABLEs FROM DB IN JSON FILEs -- */

$gamesJsonFile = $ROOT.'/games-finder/data/games.json';
$usersJsonFile = $ROOT.'/games-finder/data/users.json';

// Export games table
dbTableToJson('games', $gamesJsonFile);

// Export users table
dbTableToJson('users', $usersJsonFile);