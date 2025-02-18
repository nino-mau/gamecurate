// Import Swiper core module
import Swiper from "swiper";

// Import Swiper modules (optional, but often needed)
import { Navigation, Pagination } from "swiper/modules"; // Example modules

// Import Swiper styles (core styles and optionally module styles)
import "swiper/css";
import "swiper/css/navigation"; // Optional navigation styles
import "swiper/css/pagination"; // Optional pagination styles
// ... import other module styles you need

// Configure Swiper to use modules (if you imported any)
Swiper.use([Navigation, Pagination]); // Example of using Navigation and Pagination modules
