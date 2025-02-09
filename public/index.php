<?php
include $_SERVER['DOCUMENT_ROOT'] . '/games-finder/src/includes/header.php';
?>

<main class="home-main">
    <h1 class="home-title text-light">
        <a class="firstLink text-light animate__animated" href="/games-finder/src/views/games-list.php">Discover</a>
        <span class="middleText animate__animated">your next</span>
        <a class="secondLink text-light animate__animated" href="/games-finder/src/views/discover.php" data-replace="favorite game !">
            <span>favorite game !</span>
        </a>
    </h1>
    <div class="home-video d-flex justify-content-center">
        <div class="video-wrapper swing-in-top-fwd">
            <video class="video" autoplay muted loop playsinline>
                <source src="/games-finder/public/assets/video/home-illustration.mp4">
            </video>
        </div>
    </div>
    <div class="home-button d-flex justify-content-center">
        <a href="/games-finder/src/views/discover.php" class="btn">Discover</a>
    </div>
</main>

<?php
include $_SERVER['DOCUMENT_ROOT'] . '/games-finder/src/includes/footer.php';
?>