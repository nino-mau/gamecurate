<?php 
include $ROOT.'/games-finder/src/includes/header.php';
$pageName = "register-success";

// Start session
session_start();

$username = $_SESSION['username'] ?? '';
?>

<main class="card-container d-flex justify-content-center">
    <div class="registration-success-card card text-center mt-9 w-20 rounded-2 shadow bg-secondary">
        <div class="card-body">
            <ion-icon class="registration-success-card__check-icon text-success" name="checkmark-circle-outline" aria-hidden="true"></ion-icon>
            <h1 class="card-title"><?="Welcome $username !"?></h1>
            <p class="card-text mt-3">Congratulations, your account has been succesfully created</p>
            <a href="/games-finder/public/index.php" class="btn btn-primary mt-4" aria-label="Link to home page">Home</a>
        </div>
    </div>
</main>

<?php 
include $ROOT.'/games-finder/src/includes/footer.php';
?>