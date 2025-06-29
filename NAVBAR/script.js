const searchToggle = document.getElementById("searchToggle");
const searchWrapper = document.getElementById("searchWrapper");

searchToggle.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");
});
