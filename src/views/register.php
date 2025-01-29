<?php 
include "../includes/header.php";
$pageName = "register";

$errors = $_SESSION['errors'] ?? [];
$data = $_SESSION['formData'] ?? [];

// Clear session data after retrieving
unset($_SESSION['errors'], $_SESSION['formData']);
?>

<div class="register-page-content container d-flex flex-column justify-content-center align-items-center">
    <form class="registration-form row rounded-4 bg-secondary shadow mt-9 w-40 p-3" action="/games-finder/src/php/registration-actions.php" method="post">
        <div class="column">
            <div class="input-group mb-lg-4 mt-lg-1">
                <span class="input-group-text">@</span>
                <div class="form-floating">
                    <input  type="text" 
                            class="form-control <?= isset($errors['username']) ? 'is-invalid' : '' ?>" 
                            id="registerUsername" 
                            name="registerUsername"
                            value="<?= htmlspecialchars($data['username'] ?? '') ?>" 
                            placeholder="name@example.com">
                    <label for="registerUsername">Username</label>
                </div>
                <?php if(isset($errors['username'])): ?>
                    <div class="invalid-feedback" style="display: block;"><?= $errors['username'] ?></div>
                <?php endif; ?>
            </div>
            <div class="input-group mb-lg-4">
                <div class="form-floating">
                    <input  type="email" 
                            class="form-control <?= isset($errors['email']) ? 'is-invalid' : '' ?>" 
                            id="registerEmail" 
                            name="registerEmail"
                            value="<?= htmlspecialchars($data['email'] ?? '') ?>"  
                            placeholder="name@example.com">
                    <label for="registerEmail">Email</label>
                    <?php if(isset($errors['email'])): ?>
                        <div class="invalid-feedback"><?= $errors['email'] ?></div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="input-group mb-lg-4">
                <div class="form-floating">
                    <input  type="password" 
                            class="form-control <?= isset($errors['pwd']) ? 'is-invalid' : '' ?>" 
                            id="registerPassword" 
                            name="registerPassword" 
                            value="<?= htmlspecialchars($data['pwd'] ?? '') ?>" 
                            placeholder="Password">
                    <label for="registerPassword">Password</label>
                    <?php if(isset($errors['pwd'])): ?>
                        <div class="invalid-feedback"><?= $errors['pwd'] ?></div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="input-group mb-lg-6">
                <div class="form-floating">
                    <input  type="password" 
                            class="form-control <?= isset($errors['confirmPwd']) ? 'is-invalid' : '' ?>" 
                            id="registerConfirmPassword" 
                            name="registerConfirmPassword"
                            value="<?= htmlspecialchars($data['confirmPwd'] ?? '') ?>"  
                            placeholder="Confirm Password">
                    <label for="registerConfirmPassword">Confirm Password</label>
                    <?php if(isset($errors['confirmPwd'])): ?>
                        <div class="invalid-feedback"><?= $errors['confirmPwd'] ?></div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="mb-lg-1 d-grid ">
                <button type="submit" class="btn btn-primary btn-lg">Register</button>
            </div>
        </div>
    </form>
    <div class="text-center row mt-4"><p class="text-secondary">Already have an account ?  <a href="/games-finder/src/views/login.php">Log in</a></p></div>
</div>

<?php 
include "../includes/footer.php";
?>


