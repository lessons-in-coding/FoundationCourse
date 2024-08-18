var x = document.querySelector(".container");

x.addEventListener("click", function (y) {
  var z = y.target;
  if (z.matches(".box")) {
    var a = z.getAttribute("data-state");

    if (a === "hidden") {
      z.textContent = z.dataset.number;
      z.dataset.state = "visible";
    } else {
      z.textContent = "";
      z.setAttribute("data-state", "hidden");
    }
  }
});
