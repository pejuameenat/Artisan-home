const header = document.querySelector(".header");
header.addEventListener("click", function (e) {
  const employer = document.getElementById("employer");
  const vendor = document.getElementById("vendor");
  const forms = document.querySelectorAll(".form");
  const clicked = e.target.closest(".form");
  if (clicked) {
    forms.forEach((form) => {
      form.classList.remove("active");
    });
    if (clicked.classList.contains("tab")) {
      vendor.classList.remove("hidden");
      employer.classList.add("hidden");
    } else {
      employer.classList.remove("hidden");
      vendor.classList.add("hidden");
    }
  }
  clicked.classList.add("active");
});

function errorDisplay(elem){
    const inputs = document.querySelectorAll("input");
    const warnMsg= document.createElement('p')
    inputs.forEach((input) => {
      if (!input.value) {
        warnMsg.classList.add('error-msg')
        warnMsg.textContent = "input fields cannot be empty"
        elem.append(warnMsg)
        input.style.border = "1px solid #f00";
      }
    });
  }

  document.querySelector('#grid-wrapper').addEventListener('click', function(e){
    const msgWrapper = document.querySelector('.back-home')
    const clicked = e.target.closest('.submit-btn')
    if(clicked){
    e.preventDefault()
    errorDisplay(msgWrapper)
  }

  })