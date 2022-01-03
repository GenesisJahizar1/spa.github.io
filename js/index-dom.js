import hamburgerMenu from "./modulos/menu_hamburger.js";
import top from "./modulos/nav_top.js";
import responsiveMedia from "./modulos/responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".menu__icono", ".menu__enlaces", ".menu__link");
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/ZCX4jz87mAdCENE36" target = "_blank" rel="noopener">Ver mapa</a>`,  
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62852.54789804937!2d-69.36418874222355!3d10.07577981499155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87667cffa694ff%3A0xa2ada85dcf4dbfdc!2sCentro%20Empresarial%20Paris!5e0!3m2!1ses!2sve!4v1641061895551!5m2!1ses!2sve" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
});
