const img = document.getElementById("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
  // Hexagon
  "25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%",
  // Paralleogon
  "25% 0%, 100% 0%, 75% 100%, 0% 100%",
  // Trapezoid
  "20% 0%, 80% 0%, 100% 100%, 0% 100%",
  // Left point
  "25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%",
  // Rhombus
  "50% 0%, 100% 50%, 50% 100%, 0% 50%",
];

function changeShape() {
  const randomShape = Math.floor(Math.random() * shapeArr.length);
  const newClipPath = shapeArr[randomShape];
  const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

  // img.style.setProperty("--shape", shapeArr[randomShape]);

  if (currentClipPath !== newClipPath) {
    img.style.setProperty("--shape", newClipPath);
  } else {
    img.style.setProperty("--shape", shapeArr[randomShape + 1]);
    console.log(shapeArr[randomShape + 1]);
  }
}
