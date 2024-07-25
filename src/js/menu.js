// src/menu.js
import "../css/menu.css";
import autumn from "../assets/menuImages/autumn.jpg"
import backery from "../assets/menuImages/backery.jpg"
import burgerMenu from "../assets/menuImages/burgerMenu.jpg"
import desserts from "../assets/menuImages/desserts.jpg"
import drinks from "../assets/menuImages/drinks.jpg"
import mainDish from "../assets/menuImages/mainDish.jpg"
import salads from "../assets/menuImages/salads.jpg"
import snacks from "../assets/menuImages/snacks.jpg"
import soups from "../assets/menuImages/soups.jpg"
import sushi from "../assets/menuImages/sushi.jpg"
import sideDish from "../assets/menuImages/sideDish.jpg"

export default function loadMenu() {
    const content = document.getElementById('content');
  
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <div class="menu">
        <div class="menu-container">
          <h1>We have the best options for you today</h1>
          <div class="menu-grid">
            <div class="menu-item">
                <img src="${autumn}" alt="autumn" class="">
                <h2>Autumn Menu</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>8</span></p>
            </div>
            <div class="menu-item">
                <img src="${salads}" alt="salads" class="">
                <h2>Salads</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>13</span></p>
            </div>
            <div class="menu-item">
                <img src="${snacks}" alt="snacks" class="">
                <h2>Snacks</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>8</span></p>
            </div>
            <div class="menu-item">
                <img src="${sushi}" alt="sushi" class="">
                <h2>Sushi</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>12</span></p>
            </div>
            <div class="menu-item">
                <img src="${burgerMenu}" alt="burger Image" class="">
                <h2>Burgers</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>6</span></p>
            </div>
            <div class="menu-item">
                <img src="${soups}" alt="soups" class="">
                <h2>Soups</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>12</span></p>
            </div>
            <div class="menu-item">
                <img src="${mainDish}" alt="Main Dish" class="">
                <h2>Main</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>23</span></p>
            </div>
            <div class="menu-item">
                <img src="${sideDish}" alt="Side Dish" class="">
                <h2>Side dishes</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>6</span></p>
            </div>
            <div class="menu-item">
                <img src="${backery}" alt="backery Section" class="">
                <h2>Bakery</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>6</span></p>
            </div>
            <div class="menu-item">
                <img src="${desserts}" alt="desserts" class="">
                <h2>Desserts</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>11</span></p>
            </div>
            <div class="menu-item">
                <img src="${drinks}" alt="drinks" class="">
                <h2>Drinks</h2>
                <p>New! Seasonal menu in our cafes.</p>
                <p>Items: <span>6</span></p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    content.appendChild(menuDiv);
}


  