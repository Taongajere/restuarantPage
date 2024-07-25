// src/menu.js

export default function loadMenu() {
    const content = document.getElementById('content');
  
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <h1>Menu</h1>
      <p>Menu is currently under development, please find time to pass through our physical store to order, thank you for your patience.<p>
    `;
  
    content.appendChild(menuDiv);
}


  