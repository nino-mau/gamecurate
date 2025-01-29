<?php 
include "../includes/header.php";
$pageName = "Authentication";
?>

<div class="auth-page-content container d-flex justify-content-center align-items-center">
    <form class="registration-form rounded-4 bg-secondary mt-9" action="" method="post">
        <div class="column">
            <div class="input-group mb-lg-6 mt-lg-6">
                <span class="input-group-text">@</span>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Username</label>
                </div>
            </div>
            <div class="input-group mb-lg-6">
                <span class="input-group-text">Ex: lastname@gmail.com</span>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                    <label for="floatingInputEmail">Email</label>
                </div>
            </div>
            <div class="input-group mb-lg-6">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
            </div>
            <div class="input-group mb-lg-6">
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingConfirmPassword" placeholder="Confirm Password">
                    <label for="floatingConfirmPassword">Confirm Password</label>
                </div>
            </div>
            <div class="mb-lg-6 ">
                <button type="submit" class="btn btn-primary ">Register</button>
            </div>
        </div>
    </form>
</div>

<?php 
include "../includes/footer.php";
?>


