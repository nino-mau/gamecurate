## REQUIRE NODE.JS AND NPM

Required Node modules:

*   `@popperjs/core@2.11.8`
*   `animate.css@4.1.1`
*   `hover.css@2.3.2`
*   `bootstrap@5.3.3`
*   `globals@15.14.0`
*   `jquery@3.7.1`

## PROJECT STRUCTURE

📁 games-finder
    📁 node_modules
    📁 public
        📁 assets
            📁 css
                - custom-bootstrap.css
                - custom-bootstrap.css.map
                - custom-style.css
                - fonts.css
                - footer.css
                - games-page.css
                - main.css
                - work-in-progress.css
            📁 js
                - scripts.js
            📁 scss
                - custom.scss
        - index.php
    📁 src
        📁 includes
            - footer.php
            - header.php
            - work-in-progress.php
        📁 php
            📁 endpoints
                - get_genre_filter.php
                - get_username.php
            - db-functions.php
            - db-management.php
            - games-list-actions.php
            - globals.php
            - login-actions.php
            - registration-actions.php
        📁 views
            - contact.php
            - discover.php
            - games-list.php
            - login.php
            - logout.php
            - profile.php
            - register-success.php
            - register.php
- .gitignore
- eslint.config.mjs
- package-lock.json
- package.json
- README.md
