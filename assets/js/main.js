const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const dropdownButtons = document.querySelectorAll(".dropdown-button");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".dropdown");
    const isOpen = parent.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      const button = dropdown.querySelector(".dropdown-button");
      if (button) button.setAttribute("aria-expanded", "false");
    }
  });
});