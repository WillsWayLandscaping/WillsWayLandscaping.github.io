// Get the dropdown button and content
const button = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

// Add click event listener to the button
button.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Add click event listener to the entire document
document.addEventListener("click", function(event) {
  if (!event.target.matches(".dropdown-button") && !event.target.closest(".dropdown-content")) {
    dropdownContent.classList.remove("show");
  }
});
