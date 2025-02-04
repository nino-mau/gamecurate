<?php 
include $ROOT.'/games-finder/src/includes/header.php';

$pageName = "login";

$error = $_SESSION['error'] ?? [];
$data = $_SESSION['loginData'] ?? [];

// Clear session data after retrieving
unset($_SESSION['error'], $_SESSION['loginData']);
?>

<main class="login-page-content container d-flex flex-column justify-content-center align-items-center">
    <form class="login-form row rounded-4 bg-secondary shadow mt-9 w-40 p-3" action="/games-finder/src/php/login-actions.php" method="post">
        <div class="column">
            <div class="input-group mb-lg-4 mt-lg-1">
                <span class="input-group-text" aria-hidden="true">@</span>
                <div class="form-floating">
                    <input  type="text" 
                            class="form-control <?= isset($errors['username']) ? 'is-invalid' : '' ?>" 
                            id="loginUsername" 
                            name="loginUsername"
                            value="<?= htmlspecialchars($data['username'] ?? '') ?>" 
                            placeholder="name@example.com"
                            autocomplete="username"
                            required>
                    <label for="loginUsername">Username</label>
                </div>
                <?php if(isset($errors['username'])): ?>
                    <div class="invalid-feedback" style="display: block;"><p aria-invalid="true"><?= $errors['username'] ?></p></div>
                <?php endif; ?>
            </div>
            <div class="input-group mb-lg-4">
                <div class="form-floating">
                    <input  type="password" 
                            class="form-control <?= isset($errors['pwd']) ? 'is-invalid' : '' ?>" 
                            id="loginPassword" 
                            name="loginPassword" 
                            value="<?= htmlspecialchars($data['pwd'] ?? '') ?>" 
                            placeholder="Password"
                            autocomplete="current-password"
                            required>
                    <label for="loginPassword">Password</label>
                </div>
                <?php if(isset($errors['username'])): ?>
                    <div class="invalid-feedback" style="display: block;"><p aria-invalid="true"><?= $errors['username'] ?></p></div>
                <?php endif; ?>
            </div>
            <div class="form-check mb-lg-5">
                <input class="form-check-input" type="checkbox" name="remember" value="remember" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">Remember me</label>
            </div>
            <div class="mb-lg-1 d-grid ">
                <button type="submit" class="btn btn-primary btn-lg">Login</button>
            </div>
        </div>
    </form>
    <div class="text-center row mt-4"><p class="text-secondary">Don't have an account ?  <a href="/games-finder/src/views/register.php">Sign in</a></p></div>
</main>

<?php 
include $ROOT.'/games-finder/src/includes/footer.php';
?>