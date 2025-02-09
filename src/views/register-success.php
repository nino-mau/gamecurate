<?php
include $ROOT . '/games-finder/src/includes/header.php';

// Start session
session_start();

$username = $_SESSION['username'] ?? '';
?>

<main class="registration-success-main card-container d-flex justify-content-center align-items-center">
    <div class="card card text-center w-20 bg-light">
        <div class="card-body">
            <ion-icon class="successIcon text-success" name="checkmark-circle-outline" aria-hidden="true"></ion-icon>
            <h1 class="title"><?= "Welcome $username !" ?></h1>
            <p class="text mt-3">Congratulations, your account has been succesfully created</p>
            <a href="/games-finder/public/index.php" class="btn btn-primary mt-4" aria-label="Link to home page">Home</a>
        </div>
    </div>
</main>

<?php
include $ROOT . '/games-finder/src/includes/footer.php';
?>