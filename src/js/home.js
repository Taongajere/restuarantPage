// src/home.js
export default function loadHome() {
    const content = document.getElementById('content');
  
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
      <h1>Welcome to Our Restaurant</h1>
      <p>Best food in town!</p>
    `;
  
    content.appendChild(homeDiv);
}
  