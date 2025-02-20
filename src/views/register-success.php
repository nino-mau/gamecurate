<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
include INCLUDES_PATH . '/header.php';
?>

<main class="registration-success-main card-container d-flex justify-content-center align-items-center">
    <div class="card text-center bg-light">
        <div class="card-body">
            <img class="svg" aria-hidden="true" data-js-register-success-icon>
            <h1 class="title">Welcome !</h1>
            <p class="text">Congratulations, your account has been succesfully created.</p>
            <a href="Index" class="btn btn-primary" aria-label="Link to home page">Home</a>
        </div>
    </div>
</main>

<?php
include INCLUDES_PATH . '/footer.php';
?>