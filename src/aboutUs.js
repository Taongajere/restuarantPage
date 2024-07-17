// src/aboutUs.js
export default function loadAboutUs() {
    const content = document.getElementById('content');
  
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.innerHTML = `
      <h1>Hello!</h1>
      <p>we are a demo restuarant landing page</p>
    `;
  
    content.appendChild(aboutUsDiv);
}
  