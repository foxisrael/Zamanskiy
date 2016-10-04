var link = document.querySelector(".form-box-search");
var popup = document.querySelector(".form-box-form");
var datestart = popup.querySelector("[name=datestart]");
var datefinish = popup.querySelector("[name=datefinish]")
var form = popup.querySelector("form");

  link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("form-box-form-show");
  datestart.focus();
  console.log("Клик по ссылке вход");
});

form.addEventListener("submit", function(event){
  if (!datestart.value || datefinish.value) {
      event.preventDefault();
      console.log("Нужно ввести логин и пароль");
  }
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    popup.classList.remove("form-box-form-show");
  }
});
