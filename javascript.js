var dropdown = document.querySelector(".dropdown");
var dropdownButton = document.querySelector(".dropdown-button");
var dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
