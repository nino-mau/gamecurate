<?php
require_once __DIR__ . '/../../conf/bootstrap.php';
require LOGS_PATH . '/errors_logging.php';
include INCLUDES_PATH . '/header.php';

$error = $_SESSION['error'] ?? '';
$data = $_SESSION['loginData'] ?? [];

// Clear session data after retrieving
unset($_SESSION['error'], $_SESSION['loginData']);
?>

<main class="login-main container d-flex flex-column justify-content-center align-items-center">
    <form class="loginForm d-flex flex-column justify-content-evenly bg-light" action="/Login-actions" method="post">
        <div class="column">
            <div class="text-center">
                <h1><strong>Login</strong></h1>
            </div>
            <hr class="separator">
            <div class="input-group">
                <span class="input1 input-group-text" aria-hidden="true">@</span>
                <div class="input1 form-floating">
                    <input type="text"
                        class="form-control <?= ($error) ? 'is-invalid' : '' ?>"
                        id="loginUsername"
                        name="loginUsername"
                        value="<?= htmlspecialchars($data['username'] ?? '') ?>"
                        placeholder="name@example.com"
                        autocomplete="username"
                        required>
                    <label for="loginUsername">Username</label>
                </div>
                <?php if ($error): ?>
                    <div class="invalid-feedback" style="display: block; position: relative; top: -20px;">
                        <p aria-invalid="true" class="m-0"><?= $error ?></p>
                    </div>
                <?php endif; ?>
            </div>
            <div class="input-group">
                <div class="input2 form-floating">
                    <input type="password"
                        class="form-control"
                        id="loginPassword"
                        name="loginPassword"
                        value="<?= htmlspecialchars($data['pwd'] ?? '') ?>"
                        placeholder="Password"
                        autocomplete="current-password"
                        required>
                    <label for="loginPassword">Password</label>
                </div>
            </div>
            <div class="rememberCheck form-check">
                <input class="form-check-input" type="checkbox" name="remember" value="remember" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">Remember me</label>
            </div>
            <div class="submitBtn d-grid">
                <button type="submit" class="btn btn-secondary btn-lg">Login</button>
            </div>
        </div>
    </form>
    <div class="outer-text text-center row animate__animated animate__fadeInUp anime__duration-2s">
        <p class="text-light">Don't have an account ? <a class="text-secondary" href="/Register">Sign in</a></p>
    </div>
</main>

<?php
include INCLUDES_PATH . '/footer.php';
?>