// src/contact.js
export default function loadContact() {
    const content = document.getElementById('content');
  
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
      <h1>Contact Us</h1>
      <p>Get in touch with us!</p>
    `;
  
    content.appendChild(contactDiv);
}
  