var fN = document.querySelector("#first-name");
var lN = document.querySelector("#last-name");
var email = document.querySelector("#email");
var pw = document.querySelector("#password");
var su = document.querySelector("#sign-up");

su.addEventListener("click", function (e) {
  e.preventDefault();

  var user = {
    firstN: fN.value.trim(),
    lastN: lN.value.trim(),
    email: email.value.trim(),
    password: pw.value.trim(),
  };

  localStorage.setItem("Student", JSON.stringify(user));
});
