var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".form-adress");
var form = popup.querySelector("form");

  link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add(".form-adress-show");
  console.log("Клик по ссылке вход");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    popup.classList.remove("form-box-form-show");
  }
});
