document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // Theme persistence
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) document.documentElement.classList.add("dark");

  const toggleDark = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  document.getElementById("dark-toggle")?.addEventListener("click", toggleDark);
  document.getElementById("dark-toggle-mobile")?.addEventListener("click", toggleDark);

  // Highlight active nav
  const current = window.location.pathname;
  document.querySelectorAll("#header nav a").forEach(link => {
    if (link.href.includes(current) && current !== "/") {
      link.classList.add("active");
    }
  });

  // Initialize Swiper
  new Swiper(".mySwiper", {
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
});
