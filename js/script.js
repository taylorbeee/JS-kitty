var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");
// console.log(cat);
button.addEventListener("click", function () {
  console.log("Nice dude.");
  cat.classList.add("show");
});
