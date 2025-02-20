// module.js
import Swiper, { Navigation } from "swiper";

addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".games-list-navbar-swiper", {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: 10,
        centeredSlidesBounds: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
