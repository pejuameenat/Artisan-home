import obj from './obj.js';

const cards = document.getElementById('grid');


function makeCards(){
 let html = '';
  obj.map(function(item){
   html+= `<div class="card">
    <a class="card1" href="#">
    <h3>${item.job}</h3>
    <p class="small">${item.desc}</p>
    <div class="go-corner" href="#">
       <div class="go-arrow">
       →
     </div>
   </div>
 </a>
 </div>`
  })
  
return cards.insertAdjacentHTML("afterbegin", html);
}
makeCards();