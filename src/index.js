console.log('Hello, Resturant Page')

//import home page

import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";
import loadAboutUs from "./aboutUs";

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');
    const aboutUsButton = document.getElementById('aboutUs');

    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        loadContact();
    });

    aboutUsButton.addEventListener('click',() => {
        clearContent();
        loadAboutUs();
    });

});

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}



