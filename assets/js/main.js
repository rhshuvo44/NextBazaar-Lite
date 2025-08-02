const menuToggle = document.getElementById("menu-toggle");
// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Dark mode toggle

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// Toggle dark mode + save preference
const toggleDark = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.getElementById("dark-toggle").addEventListener("click", toggleDark);
document
  .getElementById("dark-toggle-mobile")
  .addEventListener("click", toggleDark);
// Highlight active nav link based on current URL
const links = document.querySelectorAll("#header nav a");
const current = window.location.pathname;

links.forEach((link) => {
  if (link.href.includes(`${current}`) && current !== "/") {
    link.classList.add("active");
  }
});
//  <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
