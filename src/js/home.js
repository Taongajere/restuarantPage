// src/js/home.js
import '../css/home.css';
import burgerImage from '../assets/burgerImage.png'
import clock from '../assets/icons/clock.png'
import location from '../assets/icons/location.png'
import phone from '../assets/icons/phone.png'
import foodGeneral from '../assets/foodGeneral.jpg'

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Top section
    const topSection = document.createElement('div');
    topSection.className = 'top-section';
    topSection.innerHTML = `
        <div class="text-container">
          <h1>Your Favourite Food Delivered & Fresh</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna mauris.</p>
          <button class="order-button">Order Now</button>
        </div>
        <img src="${burgerImage}" alt="Burger" class="burger-image">
    `;


    // Info cards
    const infoCards = document.createElement('div');
    infoCards.className = 'info-cards';
    infoCards.innerHTML = `
        <div class="info-card">
            <img src="${clock}" alt="clock" class="info-icon">
            <p>Today 10:00 am - 7:00 pm</p>
            <p>Working Hours</p>
        </div>
        <div class="info-card">
            <img src="${location}" alt="location" class="info-icon">
            <p>Arcadia USA</p>
            <p>Get Directions</p>
        </div>
        <div class="info-card">
            <img src="${phone}" alt="clock" class="info-icon">
            <p>419-704-4407</p>
            <p>Call Online</p>
        </div>
    `;

    // Bottom section
    const bottomSection = document.createElement('div');
    bottomSection.className = 'bottom-section';
    bottomSection.innerHTML = `
        <div class="foodGeneral">
          <img src="${foodGeneral}" alt="food" class="foodGeneral">
        </div>
        <div class="wordsContainer">
          <h3>about</h3>
          <h2>Food Is Important Part Of A Balanced Diet</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos ea necessitatibus ex, culpa excepturi ullam ducimus quia nihil enim sit repellat cupiditate, perferendis corporis? Accusamus laborum voluptatem id dignissimos?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eos ea necessitatibus ex, culpa excepturi ullam ducimus quia nihil enim sit repellat cupiditate, perferendis corporis? Accusamus laborum voluptatem id dignissimos?</p>
          
          <button class="bottomSection">
            <button class="learn-more-button">Learn More</button>
            <button class="watch-video-button">Watch Video</button>
          </button>
        </div>
    `;

    content.appendChild(topSection);
    content.appendChild(infoCards);
    content.appendChild(bottomSection);
}

export default loadHome;
