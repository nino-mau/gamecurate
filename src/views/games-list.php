<?php
include $ROOT.'/games-finder/src/includes/header.php';

$gamesDict = $_SESSION['gamesDict'];

$name = $gamesDict[0];
$desc = $gamesDict[1];
$genre = $gamesDict[2];
$price = $gamesDict[3];
$review = $gamesDict[4];
$imgPath = $gamesDict[5];

$gamesAmount = count($name);

// Variable used to filter games list
$genreFilter = "";

// Handle filtering gamesDict to only includes games who belong to the specified genre
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
        // To handle str with multiple genre 
        if (str_contains($genreConst[$i], " ")) {
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

// Handle dynamically changing the color of review text to match how high the score is
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
?>

<main class="d-flex flex-column justify-content-center">
    <nav class="d-flex justify-content-center">
        <div class="games-list-navbar d-flex flex-row justify-content-center gap-1">
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/action-icon.svg">
                <p class="navbar-text">Action</p>        
            </div>
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/adventure-icon4.svg">
                <p class="navbar-text">Adventure</p>
            </div>    
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/horror-icon.svg">
                <p class="navbar-text">Horror</p>
            </div>
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/immersive-sim-icon.svg">
                <p class="navbar-text">Imm-sim</p>        
            </div>      
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/open-world-icon.svg">
                <p class="navbar-text">Open-world</p>
            </div>
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/platformer-icon.svg">
                <p class="navbar-text">Platformer</p>
            </div>    
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/racing-icon2.svg">
                <p class="navbar-text">Racing</p>
            </div>
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/rpg-icon.svg">
                <p class="navbar-text">RPG</p>        
            </div>
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/simulation-icon.svg">
                <p class="navbar-text">Walking-sim</p>
            </div>  
            <div class="navbar-containers">
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/shooter-icon.svg">
                <p class="navbar-text">Shooter</p>
            </div>
        </div>
    </nav> 
    <div class="games-grid container text-center">
    <?php
        $displayReview = 'handleReviewColor';
        $i = 0; 
        while ($i < $gamesAmount) {
            $i2 = $i + 1;
            $i3 = $i + 2;
            $reviewHtml1 = handleReviewColor($review[$i]);
            $reviewHtml2 = handleReviewColor($review[$i2]);
            $reviewHtml3 = handleReviewColor($review[$i3]);
            echo 
            <<<HTML
                <div role="list" class="row row-cols-3 m-0">
                    <div role="listitem" class="games-grid-containers col">
                        <img class="game-img shadow rounded " src="$imgPath[$i]">
                        <div class="game-grid-sub-containers d-flex flex-row justify-content-between">
                            <p class="game-review">$reviewHtml1 </p>
                            <p class="game-genre">$genre[$i]</p>
                        </div>
                    </div>
                    <div role="listitem" class="games-grid-containers col">
                        <img class="game-img shadow rounded " src="$imgPath[$i2]">
                        <div class="game-grid-sub-containers d-flex flex-row justify-content-between">
                            <p class="game-review">$reviewHtml2 </p>
                            <p class="game-genre">$genre[$i2]</p>
                        </div>
                    </div>
                    <div class="games-grid-containers col">
                        <img class="game-img shadow rounded " src="$imgPath[$i3]">
                        <div role="listitem" class="game-grid-sub-containers d-flex flex-row justify-content-between">
                            <p class="game-review">$reviewHtml3 </p>
                            <p class="game-genre">$genre[$i3]</p>
                        </div>
                    </div>
                </div>            
            HTML;
            $i += 3;
        }
    ?>
    </div>
</main>

<?php
include $ROOT.'/games-finder/src/includes/footer.php';
?>