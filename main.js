import { obj, obj2  } from "./obj.js";

const cards = document.getElementById("grid");
const questions = document.getElementById("faq");

function makeCards() {
  let html = "";
  obj.map(function (item) {
    html += `<div class="card">
    <a class="card1" href="#">
    <h3>${item.job}</h3>
    <p class="small">${item.desc}</p>
    <div class="go-corner" href="#">
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


questions.addEventListener('click', function(e){
  let clicked = e.target.closest('fieldset')
 const closestP = clicked.children[0].lastElementChild;
 const img = clicked.lastElementChild;
 if(clicked && closestP.classList.contains('hidden')){
   closestP.classList.remove('hidden')
   img.src = './images/minus.png'
   img.classList.add('fieldset-img')
}else{
  closestP.classList.add('hidden');
  img.src = './images/plus.png'
}
})

navigator.geolocation.getCurrentPosition(function(position){
  console.log(position.coords);
  const {latitude} = position.coords
  const {longitude} = position.coords
  console.log(latitude,longitude);
  console.log(`https://www.google.com/maps/@${latitude},${longitude}`)
}, function(){
  alert('not seen')
})