let rating_buttons = document.querySelectorAll(".rating");

let selected_rating = 1;
rating_buttons.forEach((button) => {
  button.dataset.selectedRating = selected_rating;
  selected_rating++;
});

// rating_buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     button.style.cssText =
//       "color: var(--white); background-color: var(--gray-light)";

//     document.querySelectorAll(
//       "[data-selected-rating]" != button.dataset.selectedRating
//     ).addEventListener.style.cssText =
//       "color: var(--gray-light); background-color: var(--gray-medium)";
//   });
// });

rating_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("selected-button");
    document
      .querySelectorAll(
        "[data-selected-rating]" != button.dataset.selectedRating
      )
      .classList.remove("selected-button");
  });
});
