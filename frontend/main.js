// **** IMPORT ASSETS **** //

// ** Custom css **
import mainCss from "url:./assets/css/main.css";
import customCss from "url:./assets/css/custom-style.css";

// ** Librairies **
import HoverCss from "url:./node_modules/hover.css/css/hover-min.css"; // Hover.css
import AnimateCss from "url:./node_modules/animate.css/animate.min.css"; // Animate.css
import SwiperCss from "url:./node_modules/swiper/swiper-bundle.min.css"; // Swiper

// ** Custom js **
import scriptJs from "./assets/js/scripts.js";
import swiperScript from "./assets/js/swiper.js";

// ** Librairies **
import * as bootstrap from "./node_modules/bootstrap"; // Bootstrap
window.Bootstrap = bootstrap;
import SwiperJs from "./node_modules/swiper"; // Swiper
window.Swiper = SwiperJs;

// ** Videos **
import homePageVideo from "url:./assets/video/home-illustration.mp4";

// ** Svg Games List **
import witcher3Img from "url:./assets/img/games/the-witcher-3-wild-hunt.jpeg";
import rdr2Img from "url:./assets/img/games/red-dead-redemption-2.jpeg";
import godOfWarImg from "url:./assets/img/games/god-of-war.jpeg";
import horizonWestImg from "url:./assets/img/games/horizon-forbidden-west.jpeg";
import milesMoralesImg from "url:./assets/img/games/spider-man-miles-morales.jpeg";
import sekiroImg from "url:./assets/img/games/sekiro-shadows-die-twice.jpeg";
import residentEvilVillageImg from "url:./assets/img/games/resident-evil-village.jpeg";
import cyberpunk2077Img from "url:./assets/img/games/cyberpunk-2077.jpeg";
import ghostOfTsushimaImg from "url:./assets/img/games/ghost-of-tsushima.jpeg";
import deathStrandingImg from "url:./assets/img/games/death-stranding.jpeg";
import controlImg from "url:./assets/img/games/control.jpeg";
import doomEternalImg from "url:./assets/img/games/doom-eternal.jpeg";
import ff7RemakeImg from "url:./assets/img/games/final-fantasy-vii-remake.jpeg";
import animalCrossingHorizonsImg from "url:./assets/img/games/animal-crossing-new-horizons.jpeg";
import oriWillWipsImg from "url:./assets/img/games/ori-and-the-will-of-the-wisps.jpeg";
import forzaHorizon5Img from "url:./assets/img/games/forza-horizon-5.jpeg";
import eldenRingImg from "url:./assets/img/games/elden-ring.jpeg";
import darkSouls3Img from "url:./assets/img/games/dark-souls-3.jpeg";
import hadesImg from "url:./assets/img/games/hades.jpeg";
import persona5RoyalImg from "url:./assets/img/games/persona-5-royal.jpeg";
import deathloopImg from "url:./assets/img/games/deathloop.jpeg";
import itTakesTwoImg from "url:./assets/img/games/it-takes-two.jpeg";
import ratchetAndClankRiftImg from "url:./assets/img/games/ratchet-and-clank-rift-apart.jpeg";
import demonsSoulsImg from "url:./assets/img/games/demons-souls.jpeg";
import discoElysiumImg from "url:./assets/img/games/disco-elysium.jpeg";
import returnalImg from "url:./assets/img/games/returnal.jpeg";
import kcd2Img from "url:./assets/img/games/kingdom-come-deliverance-2.jpeg";
import fo76Img from "url:./assets/img/games/fallout-76.jpeg";
import balanWonderworldImg from "url:./assets/img/games/balan-wonderworld.jpeg";
import foNewVegasImg from "url:./assets/img/games/fallout-new-vegas.jpeg";

// ** Svg Contact **
import callIcon from "url:./assets/img/icons/contact/call-icon.svg";
import addressIcon from "url:./assets/img/icons/contact/home-icon.svg";
import mailIcon from "url:./assets/img/icons/contact/mail-icon.svg";
import printIcon from "url:./assets/img/icons/contact/print-icon.svg";

// ** Svg Games Genre **
import actionIcon from "url:./assets/img/icons/games-genre/action-icon.svg";
import adventureIcon from "url:./assets/img/icons/games-genre/adventure-icon4.svg";
import coopIcon from "url:./assets/img/icons/games-genre/coop-icon.svg";
import horrorIcon from "url:./assets/img/icons/games-genre/horror-icon.svg";
import imSimIcon from "url:./assets/img/icons/games-genre/immersive-sim-icon.svg";
import openWorldIcon from "url:./assets/img/icons/games-genre/open-world-icon.svg";
import platformerIcon from "url:./assets/img/icons/games-genre/platformer-icon.svg";
import racingIcon from "url:./assets/img/icons/games-genre/racing-icon2.svg";
import rpgIcon from "url:./assets/img/icons/games-genre/rpg-icon.svg";
import shooterIcon from "url:./assets/img/icons/games-genre/shooter-icon.svg";
import simulationIcon from "url:./assets/img/icons/games-genre/simulation-icon.svg";
import allIcon from "url:./assets/img/icons/menu/grid-icon3.svg";

// ** Svg Menu **
import barsMenuIcon from "url:./assets/img/icons/menu/bars-icon.svg";
import chevronDownMenuIcon from "url:./assets/img/icons/menu/chevron-down-icon.svg";
import MenuIcon from "url:./assets/img/icons/menu/grid-fill-icon.svg";

// ** Svg Socials **
import facebookIcon from "url:./assets/img/icons/socials/logo-facebook.svg";
import githubIcon from "url:./assets/img/icons/socials/logo-github.svg";
import instaIcon from "url:./assets/img/icons/socials/logo-instagram.svg";
import linkedinIcon from "url:./assets/img/icons/socials/logo-linkedin.svg";
import twitterIcon from "url:./assets/img/icons/socials/logo-twitter.svg";
import youtubeIcon from "url:./assets/img/icons/socials/logo-youtube.svg";

// ** Svg User **
import userIcon from "url:./assets/img/icons/user/UserAvatar.svg";
import userFilledIcon from "url:./assets/img/icons/user/UserAvatarFilled.svg";

// ** Svg General **
import favIcon from "url:./assets/img/icons/favicon.svg";
import registerSuccessIcon from "url:./assets/img/icons/register-success-icon.svg";
import siteIcon from "url:./assets/img/icons/site-icon.svg";
import starReviewIcon from "url:./assets/img/icons/star-icon.svg";

// Load before dom
document.querySelector("[data-icon-favicon]").href = favIcon;

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

function handleGamesListLoadersV2() {
    const gamesListCells = document.querySelectorAll(
        "[data-js-games-list-cells-container]",
    );

    gamesListCells.forEach((cell) => {
        const img = cell.querySelector("[data-js-games-list-img]");
        const spinner = cell.querySelector(
            "[data-js-games-list-cells-spinners]",
        );
        const textElements = cell.querySelectorAll("[data-js-games-list-text]");

        if (!img || !spinner) {
            console.warn("Image or spinner element not found in cell:", cell);
            return;
        }

        // Initial state
        img.style.opacity = "0";
        textElements.forEach((el) => (el.style.visibility = "hidden"));
        spinner.style.display = "block";

        // Create single event handler for cleanup
        const handleLoad = () => {
            spinner.style.display = "none";
            img.style.opacity = "1";
            textElements.forEach((el) => (el.style.visibility = "visible"));

            // Cleanup event listeners
            img.removeEventListener("load", handleLoad);
            img.removeEventListener("error", handleError);
        };

        const handleError = () => {
            console.error("Error loading image:", img.src);
            spinner.style.display = "none";
            img.style.opacity = "0";
            // Optional: Show error placeholder
            img.src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Image not found</text></svg>';
        };

        // Check if image is already loaded
        if (img.complete) {
            handleLoad();
        } else {
            img.addEventListener("load", handleLoad);
            img.addEventListener("error", handleError);
        }
    });
}

// **** ASSIGN ASSETS TO HTML **** //

addEventListener("DOMContentLoaded", () => {
    // Handle loaders
    handleGamesListLoaders();

    // *** HEADER ***

    // Custom css
    document.querySelector("[data-link-main-css]").href = mainCss;
    document.querySelector("[data-link-custom-css]").href = customCss;

    // Librairies
    document.querySelector("[data-link-hover-css]").href = HoverCss;
    document.querySelector("[data-link-animate-css]").href = AnimateCss;
    document.querySelector("[data-link-swiper-css]").href = SwiperCss;

    // Menu
    document.querySelector("[data-icon-arrowdown-accountmenu]").src =
        chevronDownMenuIcon;

    // General
    document.querySelector("[data-icon-site]").src = siteIcon;
    document.querySelector("[data-icon-site-footer]").src = siteIcon;

    // User
    const loggedinAccountIcon = document.querySelector(
        "[data-icon-loggedin-accountmenu]",
    );
    const loggedoutAccountIcon = document.querySelector(
        "[data-icon-loggedout-accountmenu]",
    );
    if (loggedinAccountIcon) {
        loggedinAccountIcon.src = userIcon;
    } else if (loggedoutAccountIcon) {
        loggedoutAccountIcon.src = userFilledIcon;
    }

    // *** HANDLE UNIQUE PAGES ***

    const path = window.location.pathname;
    const page = path.split("/").pop();

    const pagesAssets = {
        Index: () => {
            // Video
            const homePageVideoElem = document.querySelector(
                "[data-media-home-video]",
            );
            document.querySelector("[data-media-home-video-source]").src =
                homePageVideo;
            homePageVideoElem.load();
        },
        Home: () => {
            // Video
            const homePageVideoElem = document.querySelector(
                "[data-media-home-video]",
            );
            document.querySelector("[data-media-home-video-source]").src =
                homePageVideo;
            homePageVideoElem.load();
        },
        "Games-list": () => {
            // Navbar svg icons
            document.querySelector("[data-icon-genre-all]").src = allIcon;
            document.querySelector("[data-icon-genre-action]").src = actionIcon;
            document.querySelector("[data-icon-genre-adventure]").src =
                adventureIcon;
            document.querySelector("[data-icon-genre-horror]").src = horrorIcon;
            document.querySelector("[data-icon-genre-imsim]").src = imSimIcon;
            document.querySelector("[data-icon-genre-openworld]").src =
                openWorldIcon;
            document.querySelector("[data-icon-genre-platformer]").src =
                platformerIcon;
            document.querySelector("[data-icon-genre-racing]").src = racingIcon;
            document.querySelector("[data-icon-genre-coop]").src = coopIcon;
            document.querySelector("[data-icon-genre-rpg]").src = rpgIcon;
            document.querySelector("[data-icon-genre-sim]").src =
                simulationIcon;
            document.querySelector("[data-icon-genre-shooter]").src =
                shooterIcon;

            // Games list images mapping
            const gamesImageMap = {
                "data-img-games-list-witcher3": witcher3Img,
                "data-img-games-list-rdr2": rdr2Img,
                "data-img-games-list-godofwar": godOfWarImg,
                "data-img-games-list-horizonfw": horizonWestImg,
                "data-img-games-list-spidermanmiles": milesMoralesImg,
                "data-img-games-list-sekiro": sekiroImg,
                "data-img-games-list-residentevilvillage":
                    residentEvilVillageImg,
                "data-img-games-list-cyberpunk2077": cyberpunk2077Img,
                "data-img-games-list-ghostoftsushima": ghostOfTsushimaImg,
                "data-img-games-list-deathstranding": deathStrandingImg,
                "data-img-games-list-control": controlImg,
                "data-img-games-list-doometernal": doomEternalImg,
                "data-img-games-list-acnh": animalCrossingHorizonsImg,
                "data-img-games-list-oriwowo": oriWillWipsImg,
                "data-img-games-list-forzahorizon5": forzaHorizon5Img,
                "data-img-games-list-eldenring": eldenRingImg,
                "data-img-games-list-darksouls3": darkSouls3Img,
                "data-img-games-list-hades": hadesImg,
                "data-img-games-list-persona5royal": persona5RoyalImg,
                "data-img-games-list-deathloop": deathloopImg,
                "data-img-games-list-ittakestwo": itTakesTwoImg,
                "data-img-games-list-ratchetclankriftapart":
                    ratchetAndClankRiftImg,
                "data-img-games-list-demonssouls": demonsSoulsImg,
                "data-img-games-list-discoelysium": discoElysiumImg,
                "data-img-games-list-returnal": returnalImg,
                "data-img-games-list-kcd2": kcd2Img,
                "data-img-games-list-fallout76": fo76Img,
                "data-img-games-list-balanwonderworld": balanWonderworldImg,
                "data-img-games-list-falloutnewvegas": foNewVegasImg,
            };

            // Set images safely
            Object.entries(gamesImageMap).forEach(([selector, imgSrc]) => {
                const element = document.querySelector(`[${selector}]`);
                if (element) {
                    element.src = imgSrc;
                }
            });
        },
        Login: () => {
            return false;
        },
        Register: () => {
            return false;
        },
        "Register-success": () => {
            // Success svg icon
            document.querySelector("[data-js-register-success-icon]").src =
                registerSuccessIcon;
        },
        Discover: () => {
            return false;
        },
        Contact: () => {
            return false;
        },
        Profile: () => {
            return false;
        },
        Logout: () => {
            return false;
        },
        "Login-success": () => {
            return false;
        },
    };
    // Execute the page-specific function (if it exists and is a function)
    if (typeof pagesAssets[page] === "function") {
        pagesAssets[page]();
    }

    // *** FOOTER ***

    // Svg Contact
    document.querySelector("[data-icon-address]").src = addressIcon;
    document.querySelector("[data-icon-mail]").src = mailIcon;
    document.querySelector("[data-icon-call]").src = callIcon;
    document.querySelector("[data-icon-print]").src = printIcon;

    // Svg Socials
    document.querySelector("[data-icon-facebook]").src = facebookIcon;
    document.querySelector("[data-icon-twitter]").src = twitterIcon;
    document.querySelector("[data-icon-github]").src = githubIcon;
    document.querySelector("[data-icon-insta]").src = instaIcon;
    document.querySelector("[data-icon-linkedin]").src = linkedinIcon;
    document.querySelector("[data-icon-youtube]").src = youtubeIcon;
});
