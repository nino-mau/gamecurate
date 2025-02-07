<?php 
require_once 'db-functions.php';

session_start();


/** -- Functions -- */

function filterByGenres($filter, $gamesDict) {
    $name = $gamesDict[0];
    $genre = $gamesDict[2];
    $review = $gamesDict[4];
    $imgPath = $gamesDict[5];

    // Used only in conditions and not modified
    $genreConst = $gamesDict[2];
    $len = count($genreConst);

    // Iterate in reverse so that the array_splice doesn't re-order index just remove the highest one
    for($i = $len - 1; $i >= 0; $i--) {
        // Clean genre str
        $genreConst[$i] = trim($genreConst[$i]);
        $genreConst[$i] = strtolower($genreConst[$i]);
        // To handle str with multiple genre 
        if (str_contains($genreConst[$i], " ")) {

            // Handle cases where a game has two gender assigned
            $twoGenreArr = explode(" ", $genreConst[$i]);
            if ($twoGenreArr[0] !== $filter AND $twoGenreArr[1] !== $filter) {
                array_splice($genre, $i, 1);
                array_splice($name, $i, 1);
                array_splice($review, $i, 1);
                array_splice($imgPath, $i, 1);
            }
        } else {
            if ($genreConst[$i] !== $filter) {
                array_splice($genre, $i, 1);
                array_splice($name, $i, 1);
                array_splice($review, $i, 1);
                array_splice($imgPath, $i, 1);
            }
        }
    }
    $filteredGamesDict = [$name, $genre, $review, $imgPath];
    return $filteredGamesDict;
}

// Handle dynamically changing the color of review text to match the score.
function handleReviewColor($reviewScore) {
    if ($reviewScore >= 90) {
        $reviewHtml = "<span class=\"game-review-cl--green\"><i class=\"review-icon ph-fill ph-star\"></i> ";
    }
    else if ($reviewScore > 70) {
        $reviewHtml = "<span class=\"game-review-cl--lightgreen\"><i class=\"review-icon ph-fill ph-star\"></i> ";
    }    
    else if ($reviewScore >= 50) {
        $reviewHtml = "<span class=\"game-review-cl--lightgreen\"><i class=\"review-icon ph-fill ph-star\"></i> ";
    } else {
        $reviewHtml = "<span class=\"game-review-cl--red\"><i class=\"review-icon ph-fill ph-star\"></i> ";
    }
    $res = $reviewHtml . $reviewScore . '/100</span>';
    return $res;
}


/** -- Handle extracting and processing games infos from db to use to display games list -- */

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

if ($_SESSION['gamesListGenreFilter']) {
    $filteredGamesDict = filterByGenres($_SESSION['gamesListGenreFilter'], $gamesDict);
    // Remove from sessions since filter are to be executed after btn press
    $_SESSION['gamesListGenreFilter'] = '';
}




