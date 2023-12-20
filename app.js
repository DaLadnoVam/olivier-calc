const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const amountPerson = document.querySelector(".quantity-person");

let numPortion = 4;

// weight product of 1 portion for 1 person
const weightPotato = 125;
const weightPeas = 40;
const weightSausage = 75;
const weightEgg = 45;
const weightOnion = 30;
const weightCarrot = 20;
const weightCucumber = 75;
const weightMayonnaise = 18;

decrement.addEventListener("click", function () {
  if (numPortion > 1) {
    numPortion--;
    amountPerson.textContent = numPortion;
    foo();
  }
});

increment.addEventListener("click", function () {
  if (numPortion < 100) {
    numPortion++;
    amountPerson.textContent = numPortion;
    foo();
  }
});

function foo() {
  document.getElementById("potato").textContent =
    weightPotato * numPortion + "г";
  document.getElementById("peas").textContent = weightPeas * numPortion + "г";
  document.getElementById("sausage").textContent =
    weightSausage * numPortion + "г";
  document.getElementById("egg").textContent = weightEgg * numPortion + "г";
  document.getElementById("onion").textContent = weightOnion * numPortion + "г";
  document.getElementById("carrot").textContent =
    weightCarrot * numPortion + "г";
  document.getElementById("cucumber").textContent =
    weightCucumber * numPortion + "г";
  document.getElementById("mayonnaise").textContent =
    weightMayonnaise * numPortion + "г";

  document.getElementById("total-weight").textContent =
    (weightPotato +
      weightPeas +
      weightSausage +
      weightEgg +
      weightOnion +
      weightCarrot +
      weightCucumber +
      weightMayonnaise) *
    numPortion *
    0.001;
}

foo();
