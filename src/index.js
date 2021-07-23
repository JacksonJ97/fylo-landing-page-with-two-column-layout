const heroButton = document.getElementById("hero-button");
const ctaButton = document.getElementById("cta-button");
const heroTextInput = document.getElementById("hero-text-input");
const ctaTextInput = document.getElementById("cta-text-input");
const heroTextContainer = document.querySelector(".hero-input-container");
const heroTextInputContainer = document.querySelector(".hero-text-input-container");
const ctaInputContainer = document.querySelector(".cta-input-container");

const heroInputResultDiv = document.createElement("div");
heroInputResultDiv.classList.add("hero-input-response");

const ctaInputResultDiv = document.createElement("div");
ctaInputResultDiv.classList.add("cta-input-response");

heroButton.addEventListener("click", function () {
  if (isEmailValid(heroTextInput.value)) {
    heroInputResultDiv.textContent = "Please check your email";
  } else {
    heroInputResultDiv.textContent = "Please enter a valid email";
  }
});

ctaButton.addEventListener("click", function () {
  if (isEmailValid(ctaTextInput.value)) {
    ctaInputResultDiv.textContent = "Please check your email";
  } else {
    ctaInputResultDiv.textContent = "Please enter a valid email";
  }
});

heroTextInputContainer.append(heroInputResultDiv);
ctaInputContainer.insertBefore(ctaInputResultDiv, ctaButton);

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
