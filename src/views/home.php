<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
include INCLUDES_PATH . '/header.php';
?>

<main class="home-main d-flex flex-column justify-content-center">
    <h1 class="home-title text-light">
        <a class="firstLink text-light animate__animated" href="/Games-list">Discover</a>
        <span class="middleText animate__animated">your next</span>
        <a class="secondLink text-light animate__animated" href="/Discover" data-replace="favorite game !">
            <span>favorite game !</span>
        </a>
    </h1>
    <div class="home-video d-flex justify-content-center">
        <div class="video-wrapper swing-in-top-fwd">
            <video class="video" autoplay muted loop playsinline aria-hidden data-media-home-video>
                <source data-media-home-video-source>
            </video>
        </div>
    </div>
    <div class="home-button d-flex justify-content-center">
        <a href="/Discover" class="btn" role="button">Discover</a>
    </div>
</main>

<?php
include INCLUDES_PATH . '/footer.php';
?>