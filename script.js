const form = document.getElementById("form");
const email = document.getElementById("email");
const small = document.getElementById("small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    small.textContent = "Email required";
    email.style.borderColor = "red";
    email.placeholder = "example@email/com"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
    small.textContent = "Please provide a valid email address";
   
    email.placeholder = "example@email/com"
   } else {
   email.style.borderColor = "lightgray";
   small.textContent = ""
   }


});

