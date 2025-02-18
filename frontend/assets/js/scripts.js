<<<<<<< HEAD:public/assets/js/scripts.js
/* global bootstrap */

/** -- Global variables -- */

const API_URL = "https://gamecurate.org/api/";


/** -- Functions -- */

// Handle dynamic page titling
function handleDynamicHeadersElements() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const pageSettings = {
        Index: {
            title: "Home - GameCurate",
            linkToHighlight: "[data-js-home-link]",
        },
        Login: { title: "Logging - GameCurate" },
        Register: { title: "Resiter - GameCurate" },
        "Register-success.php": {
            title: "Succesfuly Registration - GameCurate",
        },
        Profile: { title: "Account Profile - GameCurate" },
        "Games-list": {
            title: "Games List - GameCurate",
            linkToHighlight: "[data-js-games-link]",
        },
        Contact: {
            title: "Contact - GameCurate",
            linkToHighlight: "[data-js-contact-link]",
        },
        Discover: {
            title: "discover - GameCurate",
            linkToHighlight: "[data-js-discover-link]",
        },
    };

    const settings = pageSettings[page] || {
        title: "Home - GameCurate",
        linkToHighlight: "[data-js-home-link]",
    };

    document.title = settings.title;

    if (settings.linkToHighlight) {
        const linkElement = document.querySelector(settings.linkToHighlight);
        if (linkElement) {
            linkElement.style.fontWeight = "700";
        }
    }
}

// Handle relaying infos from games filter buttons
function gamesFilterBtnListener() {
    const filterButtons = document.querySelectorAll(
        "[data-js-navbar-filter-btns]",
    );
    filterButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            const filterVal = button.querySelector(
                "[data-js-filter-txt]",
            ).textContent;
            const cleanedVal = filterVal.toLowerCase();

            try {
                await postData(API_URL + "get_genre_filter.php", cleanedVal);
                // Reload the page after delay when btn is clicked so that php updates the game list
                window.location.href = window.location.pathname;
            } catch (error) {
                console.error("Error during POST request:", error);
            }
        });
    });
}

// Handle displaying loaders for every games image on the games list
function handleGamesListLoaders() {
    const gamesListCellContainers = document.querySelectorAll('[data-js-games-list-cells-container]');

    gamesListCellContainers.forEach(cell => {
        const img = cell.querySelector('[data-js-games-list-img]');
        const spinner = cell.querySelector('[data-js-games-list-cells-spinners]');
        const textElements = cell.querySelectorAll('[data-js-games-list-text]');

        if (img && spinner) {
            // Set initial states
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease-in-out';
            
            // Handle both load and error events
            const handleLoad = () => {
                spinner.style.display = 'none';
                img.style.opacity = '1';
                textElements.forEach(el => el.style.visibility = 'visible');
            };

            const handleError = () => {
                spinner.style.display = 'none';
                img.style.opacity = '0';
                console.error("Error loading image:", img.src);
            };

            // Check if image is already loaded
            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener('load', handleLoad);
                img.addEventListener('error', handleError);
            }
        } else {
            console.warn("Image or spinner not found in cell:", cell);
        }
    });
}

// Used to trigger login success modal
function triggerModal(event) {
    let e = new Event(event);
    document.dispatchEvent(e);
}

handleDynamicHeadersElements();


/** -- SERVER REQUESTS -- */

// functions using Fetch API to send or get data from specified php endpoint
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log('Debug:',jsonData); //Debug
        return jsonData;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

async function postData(url, data) {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        console.log("Response from PHP:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}


/** -- HTML-DOM RELATED CODE -- */

document.addEventListener("DOMContentLoaded", function () {
    
    console.log('-- DOM content loaded --');

    /** - Handle loaders - */

    handleGamesListLoaders();

    // Trigger modal on specific event
    document.addEventListener("openLoginSuccessModal", () => {
        var myModal = new bootstrap.Modal(
            document.querySelector('[data-js-login-success-modal]'),
        );
        myModal.show();
    });

    // Display username in account menu
    (async () => {
        const userData = await getData(API_URL + "get_username.php");
        if (userData.username) {
            // Show username in account menu
            const cUsername = userData.username.toUpperCase();
            const accountMenuTitle = document.querySelector(
                "[data-js-account-menu-title]",
            );
            accountMenuTitle.textContent = cUsername + " :";

            if (userData.firstLogin) {
                // Trigger login success modal and show username
                var myModal = new bootstrap.Modal(
                    document.querySelector('[data-js-login-success-modal]'),
                );
                myModal.show();
                document.querySelector('[data-js-login-success-modal-text]').textContent = 'Welcome '+cUsername+' ! You succesfuly logged in to your account.'; 
            }
        }  
    })();
    gamesFilterBtnListener();
});


=======
/* global bootstrap */


/** -- Global variables -- */

const API_URL = "http://gamecurate.local/api/";

/** -- Functions -- */

// Handle dynamic page titling
function handleDynamicHeadersElements() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const pageSettings = {
        Index: {
            title: "Home - GameCurate",
            linkToHighlight: "[data-js-home-link]",
        },
        Login: { title: "Logging - GameCurate" },
        Register: { title: "Resiter - GameCurate" },
        "Register-success.php": {
            title: "Succesfuly Registration - GameCurate",
        },
        Profile: { title: "Account Profile - GameCurate" },
        "Games-list": {
            title: "Games List - GameCurate",
            linkToHighlight: "[data-js-games-link]",
        },
        Contact: {
            title: "Contact - GameCurate",
            linkToHighlight: "[data-js-contact-link]",
        },
        Discover: {
            title: "discover - GameCurate",
            linkToHighlight: "[data-js-discover-link]",
        },
    };

    const settings = pageSettings[page] || {
        title: "Home - GameCurate",
        linkToHighlight: "[data-js-home-link]",
    };

    document.title = settings.title;

    if (settings.linkToHighlight) {
        const linkElement = document.querySelector(settings.linkToHighlight);
        if (linkElement) {
            linkElement.style.fontWeight = "700";
        }
    }
}

// Handle relaying infos from games filter buttons
function gamesFilterBtnListener() {
    const filterButtons = document.querySelectorAll(
        "[data-js-navbar-filter-btns]",
    );
    filterButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            const filterVal = button.querySelector(
                "[data-js-filter-txt]",
            ).textContent;
            const cleanedVal = filterVal.toLowerCase();

            try {
                await postData(API_URL + "get_genre_filter.php", cleanedVal);
                // Reload the page after delay when btn is clicked so that php updates the game list
                window.location.href = window.location.pathname;
            } catch (error) {
                console.error("Error during POST request:", error);
            }
        });
    });
}

// Handle displaying loaders for every games image on the games list
function handleGamesListLoaders() {
    const gamesListCellContainers = document.querySelectorAll(
        "[data-js-games-list-cells-container]",
    );

    gamesListCellContainers.forEach((cell) => {
        const img = cell.querySelector("[data-js-games-list-img]");
        const spinner = cell.querySelector(
            "[data-js-games-list-cells-spinners]",
        );
        const textElements = cell.querySelectorAll("[data-js-games-list-text]");

        if (img && spinner) {
            // Set initial states
            img.style.opacity = "0";
            img.style.transition = "opacity 0.3s ease-in-out";

            // Handle both load and error events
            const handleLoad = () => {
                spinner.style.display = "none";
                img.style.opacity = "1";
                textElements.forEach((el) => (el.style.visibility = "visible"));
            };

            const handleError = () => {
                spinner.style.display = "none";
                img.style.opacity = "0";
                console.error("Error loading image:", img.src);
            };

            // Check if image is already loaded
            if (img.complete) {
                handleLoad();
            } else {
                img.addEventListener("load", handleLoad);
                img.addEventListener("error", handleError);
            }
        } else {
            console.warn("Image or spinner not found in cell:", cell);
        }
    });
}

// Used to trigger login success modal
function triggerModal(event) {
    let e = new Event(event);
    document.dispatchEvent(e);
}

handleDynamicHeadersElements();

/** -- SERVER REQUESTS -- */

// functions using Fetch API to send or get data from specified php endpoint
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log("Debug:", jsonData); //Debug
        return jsonData;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

async function postData(url, data) {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let result = await response.json();
        console.log("Response from PHP:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

/** -- HTML-DOM RELATED CODE -- */

document.addEventListener("DOMContentLoaded", function () {
    console.log("-- DOM content loaded --");

    /** - Handle loaders - */

    handleGamesListLoaders();

    // Trigger modal on specific event
    document.addEventListener("openLoginSuccessModal", () => {
        var myModal = new bootstrap.Modal(
            document.querySelector("[data-js-login-success-modal]"),
        );
        myModal.show();
    });

    // Display username in account menu
    (async () => {
        const userData = await getData(API_URL + "get_username.php");
        if (userData.username) {
            // Show username in account menu
            const cUsername = userData.username.toUpperCase();
            const accountMenuTitle = document.querySelector(
                "[data-js-account-menu-title]",
            );
            accountMenuTitle.textContent = cUsername + " :";

            if (userData.firstLogin) {
                // Trigger login success modal and show username
                var myModal = new bootstrap.Modal(
                    document.querySelector("[data-js-login-success-modal]"),
                );
                myModal.show();
                document.querySelector(
                    "[data-js-login-success-modal-text]",
                ).textContent =
                    "Welcome " +
                    cUsername +
                    " ! You succesfuly logged in to your account.";
            }
        }
    })();
    gamesFilterBtnListener();
});
>>>>>>> 730beef (Build: Start configuring the project to use parcel):frontend/assets/js/scripts.js
