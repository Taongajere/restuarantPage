// src/aboutUs.js
import '../css/aboutUs.css';
import burger2 from '../assets/burger2.png'
import phone from '../assets/icons/phone.png'

export default function loadAboutUs() {
    const content = document.getElementById('content');
  
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.innerHTML = `
      <section class="about-us">
        <div class="contentWords">
            <h1>Have no time to prepare food?</h1>
            <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt eaque explicabo, deserunt error veniam! Expedita animi perferendis modi consequuntur ducimus, consectetur magni. Accusamus impedit modi vero aut officia qui.</p>
            <div class="buttons">
                <a href="#" class="btn order">Order food</a>
                <a href="#" class="btn read-more">Read more</a>
            </div>

            <div class="titleFlex">
              <h2 class="title">about us</h2>
            </div>
            <div class="contactUsFlex">
                <div class="contactUs">
                    <img src="${phone}" alt="phone" class="ContactUs">
                    <p>419-704-4407</p>
                    <p>Call Online</p>
                </div>
                <div class="contactUs">
                    <img src="${phone}" alt="phone" class="ContactUs">
                    <p>419-704-4407</p>
                    <p>Call Online</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img <img src="${burger2}" alt="Burger2" " alt="Delicious food">
        </div>
      </section>
    `;
  
    content.appendChild(aboutUsDiv);
}
  