let rating_buttons = document.querySelectorAll(".rating");
let submit_button = document.querySelector(".submit");

// gives all buttons data-attribute depending on their value (position)
let selected_rating = 1;
rating_buttons.forEach((button) => {
  button.dataset.selectedRating = selected_rating;
  selected_rating++;
});

//resets score buttons to default style
function resetButtonsClass() {
  rating_buttons.forEach((button) =>
    button.classList.remove("selected-button")
  );
}

function toggleButtonClass(button) {
  button.addEventListener("click", function () {
    resetButtonsClass();
    button.classList.toggle("selected-button");
    selected_rating = button.dataset.selectedRating;
    submit_button.disabled = false;
  });
}

//applies above logic to buttons
rating_buttons.forEach((button) => {
  toggleButtonClass(button);
});

submit_button.addEventListener("click", () => {
  hideCard();
  addStarsAmountMessage();
  showSubmitMessage();
});

function showSubmitMessage() {
  document.querySelector(".thank-you-card").style.display = "flex";
}

function hideCard() {
  document.querySelector(".container").style.display = "none";
}

function addStarsAmountMessage() {
  document.querySelector(
    ".thank-you-message"
  ).textContent = `You selected ${selected_rating} out of 5`;
}

submit_button.disabled = true;
