// ============================
// Part 2: Functions, Scope, Parameters & Return Values
// ============================

// Global variable
let clickCount = 0;

// Function with parameters and return value
function addNumbers(a, b) {
  return a + b;
}

// Local vs Global Scope Example
function incrementClick() {
  let localIncrement = 1; // Local scope
  clickCount += localIncrement; // Modifies global variable
  return clickCount;
}

// Reusable function to toggle animation
function triggerAnimation(element, className) {
  element.classList.add(className);

  // Remove after animation ends to allow retrigger
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  }, { once: true });
}

// ============================
// Part 3: Combining CSS + JS
// ============================

const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");
const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Animate box when button is clicked
animateBtn.addEventListener("click", () => {
  console.log("Box animated. Clicks so far:", incrementClick());
  triggerAnimation(box, "animate");
});

// Show popup
popupBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Demonstration of function usage in console
console.log("Sum of 5 + 3:", addNumbers(5, 3)); // → 8
