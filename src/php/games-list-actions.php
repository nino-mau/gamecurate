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
            case "name":
                $nameArr[] = $item;
                break;
            case "description":
                $descArr[] = $item;
                break;
            case "genre":
                $genreArr[] = $item;
                break;            
            case "price":
                $priceArr[] = $item;
                break;            
            case "review":
                $reviewArr[] = $item;
                break;            
            case "image_path":
                $imagepathArr[] = $item;
                break;
        }
    }
}

// Put these arrays back in a dictionnary
$gamesDict = [$nameArr, $descArr, $genreArr, $priceArr, $reviewArr, $imagepathArr];

// For visual feedback
print_r($gamesDict);

// Send data to SESSIONS to be used on pages
$_SESSION['gamesDict'] = $gamesDict;
