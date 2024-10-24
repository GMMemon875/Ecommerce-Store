const button = document.querySelector(".category-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

button.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close the dropdown menu if clicked outside
window.addEventListener("click", function (event) {
  if (!button.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});
