const buttonSubmit = document.querySelectorAll(".form-question__button");

window.addEventListener("resize", changeButton);

for (let i = 0; i < buttonSubmit.length; i++) {
  buttonSubmit[i].addEventListener("click", sendMessage);
}

function changeButton() {
  if (document.documentElement.scrollWidth > 540) {
    for (let i = 0; i < buttonSubmit.length; i++) {
      buttonSubmit[i].innerHTML = "Отремонтируйте камеру ✌️";
    }
  } else {
    for (let i = 0; i < buttonSubmit.length; i++) {
      buttonSubmit[i].innerHTML = "✌️";
    }
  }
}

function sendMessage(evt) {
  evt.currentTarget.innerHTML = "Круто, спасибо за доверие!";
}
