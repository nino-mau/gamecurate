

// Implement login/resigter popover on account menu
jQuery(function() {
    // Custom popover content with buttons
    const popoverContent = `
        <div class="account-btn__popoverBody">
            <div class="d-flex flex-column gap-3 justify-content-center">
                <a role="button" class="btn btn-primary" href="/games-finder/src/views/login.php">Login</a>
                <a role="button" class="btn btn-primary" href="/games-finder/src/views/register.php">Register</a>
            </div>
        </div>
    `;
    // Initialize popover
    new bootstrap.Popover('.user-menu--loggedout', {
        content: popoverContent,
        html: true,
        sanitize: false,
        placement: 'bottom',
        trigger: 'focus'
    });
});

// Implement logout/account info popover on account menu
jQuery(function() {
    // Custom popover content with buttons
    const popoverContent = `
        <div class="account-btn__popoverBody--loggedin">
            <div class="d-flex flex-column gap-3 justify-content-center">
                 <a role="button" class="btn btn-primary" href="/games-finder/src/views/logout.php">Logout</a>
            </div>
        </div>
    `;
    // Initialize popover
    new bootstrap.Popover('.user-menu--loggedin', {
        content: popoverContent,
        html: true,
        sanitize: false,
        placement: 'bottom',
        trigger: 'focus'
    });
});