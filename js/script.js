// Modal Box One
const itemDetailModalOne = document.querySelector("#products-one");
const itemDetailButtonsOne = document.querySelectorAll(".one");

itemDetailButtonsOne.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalOne.style.display = "flex";
    itemDetailModalTwo.style.display = "none";
    e.preventDefault();
  };
});

// Modal Box Two
const itemDetailModalTwo = document.querySelector("#products-two");
const itemDetailButtonsTwo = document.querySelectorAll(".two");

itemDetailButtonsTwo.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTwo.style.display = "flex";
    itemDetailModalOne.style.display = "none";
    e.preventDefault();
  };
});
