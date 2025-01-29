<?php 
include "../includes/header.php";
$pageName = "Authentication-success";
?>

<div class="card-container d-flex justify-content-center">
    <div class="registration-success-card card text-center mt-9 w-20 rounded-2 shadow bg-secondary">
        <div class="card-body">
            <ion-icon class="registration-success-card__check-icon text-success" name="checkmark-circle-outline"></ion-icon>
            <h1 class="card-title">Welcome !</h1>
            <p class="card-text mt-3">Congratulations, your account has been succesfully created</p>
            <a href="/games-finder/public/index.html" class="btn btn-primary mt-4">Continue</a>
        </div>
    </div>
</div>

<?php 
include "../includes/footer.php";
?>