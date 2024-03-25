const password = document.querySelector(".pword");
const passwordVisible = document.querySelector(".visible");
const login = document.getElementById("loginbtn");
const passwordWrapper = document.querySelector(".password");

passwordVisible.addEventListener("click", function () {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    passwordVisible.setAttribute("src", "./images/hide.png");
  } else {
    password.setAttribute("type", "password");
    passwordVisible.setAttribute("src", "./images/visible.png");
  }
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
      if(warnMsg.classList.contains('error-msg'))return
    }else{
        input.style.border = '1px solid cornflowerblue'
    }
  });
}

login.addEventListener("click", function (e) {
   e.preventDefault()
   errorDisplay(passwordWrapper)
});
