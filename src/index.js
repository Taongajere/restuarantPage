console.log('Hello, Resturant Page')

//import home page
import './css/styles.css'
import loadHome from "./js/home";
import loadContact from "./js/contact";
import loadMenu from "./js/menu";
import loadAboutUs from "./js/aboutUs";

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



