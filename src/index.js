console.log('Hello, Resturant Page')

//import home page
import './css/styles.css'
import loadHome from "./js/home";
import loadMenu from "./js/menu";
import loadAboutUs from "./js/aboutUs";

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    setActiveTab('home');
 
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutUsButton = document.getElementById('aboutUs');

    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
        setActiveTab('home');
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
        setActiveTab('menu');
    });

    aboutUsButton.addEventListener('click',() => {
        clearContent();
        loadAboutUs();
        setActiveTab('aboutUs');
    });

});

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}


export function setActiveTab(activeTabId) {
    const buttons = document.querySelectorAll('.navButton');
    buttons.forEach(button => {
        if (button.id === activeTabId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

