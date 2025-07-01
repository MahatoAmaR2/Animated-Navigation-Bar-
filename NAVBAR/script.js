const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  console.log("HAR HAR MAHADEV");
});

const links = document.querySelectorAll(".nav-links a");
const indicator = document.getElementById("indicator");

function resetIndicatorClasses() {
  for (let i = 1; i <= 5; i++) {
    indicator.classList.remove(`position-${i}`);
  }
}

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    resetIndicatorClasses();
    indicator.classList.add(`position-${index + 1}`);
  });
});
