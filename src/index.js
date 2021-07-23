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
  heroInputResultDiv.textContent = "Please check your email";
});

ctaButton.addEventListener("click", function () {
  ctaInputResultDiv.textContent = "Please check your email";
});

heroTextInputContainer.append(heroInputResultDiv);
ctaInputContainer.insertBefore(ctaInputResultDiv, ctaButton);
