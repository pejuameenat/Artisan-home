const header  = document.querySelector('.header');
const employer = document.getElementById('employer');
const vendor = document.getElementById('vendor');

header.forEach((item, index) => {
    item.addEventListener('click', function(){
        console.log(index);
        if(index === 1 && !item.classList.contains('active')){
            item.classList.add('active')
            employer.classList.remove('hidden')
            vendor.classList.add('hidden')
        }else{
            item.classList.remove('active')
            employer.classList.add('hidden')
            vendor.classList.remove('hidden')
        }
    })
});

//     header.addEventListener('click', function(e){
//      console.log(e.target);
//      if(!e.target.classList.contains('active')){
//         e.target.classList.add('active')
//      }else{
//         e.target.classList.remove('active')
//      }
// })