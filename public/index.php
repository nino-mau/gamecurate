<?php
include $ROOT . '/games-finder/src/includes/header.php';
?>

<main class="home-main">
    <h1 class="home-title text-light">
        <a class="firstLink text-light animate__animated">Discover</a>
        <span class="middleText animate__animated">your next</span>
        <a class="secondLink text-light animate__animated" data-replace="favorite game !">
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
        <button class="btn">Click Me</button>
    </div>
</main>



<?php
include $ROOT . '/games-finder/src/includes/footer.php';
?>