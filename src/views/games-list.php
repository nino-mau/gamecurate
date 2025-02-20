<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
require INCLUDES_PATH . '/header.php';
?>

<main class="games-list-main d-flex flex-column align-items-center justify-content-start">
    <nav>
        <div class="games-list-navbar d-flex flex-row justify-content-center">
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-all>
                <p class="navbar-text" data-js-filter-txt>All</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-action>
                <p class="navbar-text" data-js-filter-txt>Action</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-adventure>
                <p class="navbar-text" data-js-filter-txt>Adventure</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-horror>
                <p class="navbar-text" data-js-filter-txt>Horror</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-imsim>
                <p class="navbar-text" data-js-filter-txt>Imm-sim</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-openworld>
                <p class="navbar-text" data-js-filter-txt>Open-world</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-platformer>
                <p class="navbar-text" data-js-filter-txt>Platformer</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-racing>
                <p class="navbar-text" data-js-filter-txt>Racing</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-coop>
                <p class="navbar-text" data-js-filter-txt>Co-op</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-rpg>
                <p class="navbar-text" data-js-filter-txt>RPG</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-sim>
                <p class="navbar-text" data-js-filter-txt>Sim</p>
            </div>
            <div class="navbar-btn hvr-reveal" data-js-navbar-filter-btns>
                <img class="navbar-icons" data-icon-genre-shooter>
                <p class="navbar-text" data-js-filter-txt>Shooter</p>
            </div>
        </div>
    </nav>
    <div class="games-grid text-center g-2 d-flex flex-column justify-content-center align-items-center">
        <!-- <h2 class="games-list-genre-title">Genre</h2> -->
        <?php
        require PHP_PATH . '/games-list-actions.php';

        if (isset($filteredGamesDict) && $filteredGamesDict) {
            $name = $filteredGamesDict[0];
            $genre = $filteredGamesDict[1];
            $review = $filteredGamesDict[2];
            $imgDataAttribute = $filteredGamesDict[3];
        } else {
            $name = $gamesDict[0];
            $genre = $gamesDict[2];
            $review = $gamesDict[4];
            $imgDataAttribute = $gamesDict[5];
        }

        echo "<h2 class='games-list-genre-title'>$gamesFilterText</h2>";

        $displayReview = 'handleReviewColor';
        $gamesAmount = count($name);
        $i = 0;
        while ($i < $gamesAmount) {
            // True when $i is a multiple of three
            if ($i % 3 == 0) {
                if ($i > 0) {
                    echo '</div>'; // Close the previous row
                }
                echo '<div role="list" class="games-grid-row row row-cols-1 row-cols-2 row-cols-3">'; // Start a new row
            }

            $reviewHtml = handleReviewColor($review[$i]);
            echo
            <<<HTML
                <div role="listitem" class="games-grid-containers col" data-js-games-list-cells-container>
                    <div class="spinners spinner-border" role="status" data-js-games-list-cells-spinners></div>
                    <img class="game-img shadow rounded" $imgDataAttribute[$i] data-js-games-list-img>
                    <div class="sub-container d-flex flex-row justify-content-between" data-js-games-list-text>
                        <p class="game-review">$reviewHtml</p>
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