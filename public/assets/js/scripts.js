
/** ---- HTML-DOM RELATED CODE ---- */

document.addEventListener('DOMContentLoaded', function () {
    // Implement login/register popover on account menu
    jQuery(function() {
        /** ---- LOGIN/REGISTER POPOVER ---- */
        
        // Custom logged out popover content with buttons
        const popoverLoContent = `
            <div class="account-btn__popoverBody">
                <div class="d-flex flex-column gap-3 justify-content-center">
                    <a role="button" class="btn btn-primary" href="/games-finder/src/views/login.php">Login</a>
                    <a role="button" class="btn btn-primary" href="/games-finder/src/views/register.php">Register</a>
                </div>
            </div>
        `;

        // Custom logged in popover content with buttons
        const popoverLiContent = `
            <div class="account-btn__popoverBody--loggedin">
                <div class="d-flex flex-column gap-3 justify-content-center">

                    <a role="button" class="btn btn-primary" href="/games-finder/src/views/logout.php">Logout</a>
                </div>
            </div>
        `;

        // Initialize popovers PROPERLY
        document.querySelectorAll('.user-menu--loggedout').forEach(el => {
            new bootstrap.Popover(el, {
                content: popoverLoContent,
                html: true,
                sanitize: false,
                placement: 'bottom',
                trigger: 'focus'
            });
        });

        document.querySelectorAll('.user-menu--loggedin').forEach(el => {
            new bootstrap.Popover(el, {
                content: popoverLiContent,
                html: true,
                sanitize: false,
                placement: 'bottom',
                trigger: 'focus'
            });
        });
    });

    /** -- MENU ICONS HOVER -- */
    const userMenu = document.querySelector('.user-menu');
    // Add null check for userMenu
    if (userMenu) {
        const userMenuIcon = userMenu.querySelector('.icons');
        let isPopoverActive = false;

        // Apply hover style on mouseover
        userMenuIcon.addEventListener("mouseover", () => {
            if (!isPopoverActive) {
                userMenuIcon.style.transform = 'scale(1.2)';
            }
        });

        // Remove hover style on mouseout
        userMenuIcon.addEventListener("mouseout", () => {
            if (!isPopoverActive) {
                userMenuIcon.style.transform = '';
            }
        });

        // Handle popover events
        userMenu.addEventListener('shown.bs.popover', () => {
            isPopoverActive = true;
            userMenuIcon.style.transform = 'scale(1.2)';
        });

        userMenu.addEventListener('hidden.bs.popover', () => {
            isPopoverActive = false;
            if (!userMenu.matches(':hover')) {
                userMenuIcon.style.transform = '';
            }
        });
    }
});

