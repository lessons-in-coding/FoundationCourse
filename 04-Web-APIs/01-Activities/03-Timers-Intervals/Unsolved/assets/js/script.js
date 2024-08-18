var message =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var z = message.split(" ");

var x = document.querySelector("#countdown");
var y = document.querySelector("#main");

function countdown() {
  var num = 5;

  var xyz = setInterval(() => {
    if (num > 1) {
      x.textContent = num + " seconds remaining!";
      num--;
    } else if (num === 1) {
      x.textContent = num + " second remaining!";
      num--;
    } else {
      x.textContent = "";
      clearInterval(xyz);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  var a = 0;

  var msg = setInterval(() => {
    if (z[a] === undefined) {
      clearInterval(msg);
    } else {
      y.textContent = z[a];
      a++;
    }
  }, 1000);
}

countdown();
