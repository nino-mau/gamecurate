<?php 
require_once 'db-functions.php';

// Start session
session_start();


$gamesList = getDbTable('games');

// Create empty array to store table columns
$nameArr = [];
$descArr = [];
$genreArr = [];
$priceArr = [];
$reviewArr = [];
$imagepathArr = [];

// Store table infos in arrays representing columns 
foreach ($gamesList as $dict) {
    foreach ($dict as $key => $item) {
        switch ($key) {
            case $key === "name":
                $nameArr[] = $item;
                break;
            case $key === "description":
                $descArr[] = $item;
                break;
            case $key === "genre":
                $genreArr[] = $item;
                break;            
            case $key === "price":
                $priceArr[] = $item;
                break;            
            case $key === "review":
                $reviewArr[] = $item;
                break;            
            case $key === "image_path":
                $imagepathArr[] = $item;
                break;
        }
    }
}

// Put these arrays back in a dictionnary
$gamesDict = [];
array_push($gamesDict, $nameArr, $descArr, $genreArr, $priceArr, $reviewArr, $imagepathArr);

// Send data to SESSIONS to be used on pages
$_SESSION['gamesDicy'] = $gamesDict;