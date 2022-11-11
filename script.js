const names = document.querySelector("#name");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const form = document.querySelector(".formselect");
const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const addressError = document.querySelector("#addressError");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector(".confirmMsg");
const thankYou = document.querySelector(".thankYou");

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();

  if (names.value.length <= 0) {
    nameError.innerHTML = "This field is Required";
  } else {
    nameError.innerHTML = "";
  }
  if (subject.value.length < 10) {
    subjectError.innerHTML = "The minimum Length is 10";
  } else {
    subjectError.innerHTML = "";
  }
  if (address.value.length < 10) {
    addressError.innerHTML = "The minimum Length is 10";
  } else {
    addressError.innerHTML = "";
  }
  if (email.value.length <= 0 && !validateEmail(email.value)) {
    emailError.innerHTML = "Please enter a valid Email address";
  } else {
    emailError.innerHTML = "";
  }
  if (names.value.length <= 0 || subject.value.length < 10 || address.value.length < 10 || email.value.length <= 0 || !validateEmail(email.value)) {
    successMessage.innerHTML = "";
  } else {
    successMessage.innerHTML = "<p>Thank you for getting in touch, We will come back to you as soon as possible</p>";
    form.remove();
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
