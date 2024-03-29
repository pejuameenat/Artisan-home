import { obj, obj2, obj3, obj4} from "./obj.js";

const cards = document.getElementById("grid");
const questions = document.getElementById("faq");
const footerWrapper = document.getElementById("footerWrapper");

 
 document.querySelector('.menu').addEventListener('click', function(){
    document.querySelector('.nav-bar').classList.toggle('active')
    document.querySelector('.nav-lists').classList.toggle('nav-lists-active')
 })
function makeCards() {
  let html = "";
  obj.map(function (item) {
    html += `<div class="card">
    <a class="card1" href="#">
    <h3>${item.job}</h3>
    <p class="small">${item.desc}</p>
    <div class="go-corner">
       <div class="go-arrow">
       →
     </div>
   </div>
 </a>
 </div>`;
  });

  return cards.insertAdjacentHTML("afterbegin", html);
}
makeCards();

function faqs() {
  let elem = "";
  obj2.map(function (el) {
    elem += `<fieldset>
       <div class="questions">
          <h4>${el.h4}</h4>
          <p class=" show hidden">${el.p}</p>
      </div>
      <img src="./images/plus.png" class="faqimg" alt="plus-sign">
   </fieldset>`;
  });
  return questions.insertAdjacentHTML("afterbegin", elem);
}
faqs();

questions.addEventListener("click", function (e) {
  let clicked = e.target.closest("fieldset");
  const closestP = clicked.children[0].lastElementChild;
  const img = clicked.lastElementChild;
  if (clicked && closestP.classList.contains("hidden")) {
    closestP.classList.remove("hidden");
    img.src = "./images/minus.png";
    img.classList.add("fieldset-img");
  } else {
    closestP.classList.add("hidden");
    img.src = "./images/plus.png";
  }
});

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords
      const { longitude } = position.coords
      const coords = [latitude, longitude]
      const map = L.map('map').setView(coords, 13)

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)
      map.scrollWheelZoom.disable()
      
    },
    function () {
      alert('could not get location')
    }
  )
  }
  
function testimony(){
  const cardWrapper = document.querySelector('#cards')
 let cards = ''
obj4.map(function(card){
  cards = `<div class="cardWrapper">
  <img src=${card.quote}  alt="quote icon" />
  <p> ${card.cardp}</p>
  <div class="overlay">
    <img src=${card.img} alt="display picture">
    <h5>${card.h5}</h5>
    <p>${card.p}</p>
  </div>
</div>`
 return cardWrapper.insertAdjacentHTML('afterbegin', cards)
})
}

testimony();

function footer() {
  let element = "";
  obj3.map(function (elem) {
    element += `<div class="mb-6">
   <h5
     class="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
     ${elem.h5}
   </h5>

   <ul class="mb-0 list-none">
     <li>
       <a href="#!" class="text-neutral-800 dark:text-neutral-200"
         >${elem.listOne}</a
       >
     </li>
     <li>
       <a href="#!" class="text-neutral-800 dark:text-neutral-200"
         >${elem.listTwo}</a
       >
     </li>
     <li>
       <a href="#!" class="text-neutral-800 dark:text-neutral-200"
         >${elem.listThree}</a
       >
     </li>
     <li>
       <a href="#!" class="text-neutral-800 dark:text-neutral-200"
         >${elem.listFour}</a
       >
     </li>
   </ul>
 </div>`;
  });
  return footerWrapper.insertAdjacentHTML("afterbegin", element);
}

footer();

const date = new Date();
const year = date.getFullYear();
document.getElementById("copy").textContent += `© ${year} Copy Right.`;

document.querySelector('#mapbtn').addEventListener('click', function(e){
  e.preventDefault()
})