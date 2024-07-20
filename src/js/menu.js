// src/menu.js

export default function loadMenu() {
    const content = document.getElementById('content');
  
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <h1>Menu</h1>
      <p>Delicious items on our menu<p>
    `;
  
    content.appendChild(menuDiv);
}


  