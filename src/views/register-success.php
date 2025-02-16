<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
include INCLUDES_PATH . '/header.php';
?>

<main class="registration-success-main card-container d-flex justify-content-center align-items-center">
    <div class="card card text-center w-20 bg-light">
        <div class="card-body">
            <ion-icon class="successIcon text-success" name="checkmark-circle-outline" aria-hidden="true"></ion-icon>
            <h1 class="title">"Welcome !"</h1>
            <p class="text mt-3">Congratulations, your account has been succesfully created.</p>
            <a href="Index" class="btn btn-primary mt-2" aria-label="Link to home page">Home</a>
        </div>
    </div>
</main>

<?php
include INCLUDES_PATH . '/footer.php';
?>