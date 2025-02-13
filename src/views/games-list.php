<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
require INCLUDES_PATH . '/header.php';
?>

<main class="games-list-main">
    <nav>
        <div class="games-list-navbar d-flex flex-row justify-content-center">
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/menu/grid-icon.svg">
                <p class="navbar-text" data-js-filter-txt>All</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/action-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Action</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/adventure-icon4.svg">
                <p class="navbar-text" data-js-filter-txt>Adventure</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/horror-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Horror</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/immersive-sim-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Imm-sim</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/open-world-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Open-world</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/platformer-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Platformer</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/racing-icon2.svg">
                <p class="navbar-text" data-js-filter-txt>Racing</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/coop-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Co-op</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/rpg-icon.svg">
                <p class="navbar-text" data-js-filter-txt>RPG</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/simulation-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Walking-sim</p>
            </div>
            <div class="navbar-btn hvr-reveal hvr-bounce-in" data-js-navbar-filter-btns>
                <img class="navbar-icons" src="/games-finder/public/assets/img/icons/games-genre/shooter-icon.svg">
                <p class="navbar-text" data-js-filter-txt>Shooter</p>
            </div>
        </div>
    </nav>
    <div class="games-grid container text-center">
        <?php
        echo 'test';

        require PHP_PATH . '/games-list-actions.php';

        echo 'test2';

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
                echo '<div role="list" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">'; // Start a new row
            }

            $reviewHtml = handleReviewColor($review[$i]);
            echo
            <<<HTML
                <div role="listitem" class="games-grid-containers col">
                    <img class="game-img shadow rounded hvr-float" src="$imgPath[$i]">
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
include INCLUDES_PATH . '/footer.php';
?>