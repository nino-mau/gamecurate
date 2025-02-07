<?php
require_once $ROOT.'/games-finder/src/includes/header.php';
?>

<main class="d-flex flex-column justify-content-center">
    <nav class="d-flex justify-content-center">
        <div class="games-list-navbar d-flex flex-row justify-content-center gap-1">
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/action-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Action</p>        
            </div>
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/adventure-icon4.svg">
                <p class="navbar-text" data-js-filter-txt>Adventure</p>
            </div>    
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/horror-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Horror</p>
            </div>
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/immersive-sim-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Imm-sim</p>        
            </div>      
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/open-world-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Open-world</p>
            </div>
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/platformer-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Platformer</p>
            </div>    
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/racing-icon2.svg">
                <p class="navbar-text" data-js-filter-txt>Racing</p>
            </div>
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/rpg-icon.svg">
                <p class="navbar-text" data-js-filter-txt>RPG</p>        
            </div>
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/simulation-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Walking-sim</p>
            </div>  
            <div class="navbar-btn" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/shooter-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Shooter</p>
            </div>
        </div>
    </nav> 
    <div class="games-grid container text-center">
    <?php
        require $ROOT.'/games-finder/src/php/games-list-actions.php';

        if ($filteredGamesDict) {
            $name = $filteredGamesDict[0];
            $genre = $filteredGamesDict[1];
            $review = $filteredGamesDict[2];
            $imgPath = $filteredGamesDict[3];
        } else {
            $name = $gamesDict[0];
            $genre = $gamesDict[2];
            $review = $gamesDict[4];
            $imgPath = $gamesDict[5];
        }

        $displayReview = 'handleReviewColor';
        $gamesAmount = count($name);
        $i = 0; 
        while ($i < $gamesAmount) {
            // True when $i is a multiple of three
            if ($i % 3 == 0) {
                if ($i > 0) {
                    echo '</div>'; // Close the previous row
                }
                echo '<div role="list" class="row row-cols-3 m-0">'; // Start a new row
            }

            $reviewHtml = handleReviewColor($review[$i]);
            echo 
            <<<HTML
                <div role="listitem" class="games-grid-containers col">
                    <img class="game-img shadow rounded " src="$imgPath[$i]">
                    <div class="game-grid-sub-containers d-flex flex-row justify-content-between">
                        <p class="game-review">$reviewHtml </p>
                        <p class="game-genre">$genre[$i]</p>
                    </div>
                </div>            
            HTML;
            $i++;
        }
        // True when $i isn't a multiple of three
        if ($i % 3 != 0) {
            echo '</div>'; 
        }
    ?>
    </div>
</main>

<?php
include $ROOT.'/games-finder/src/includes/footer.php';
?>