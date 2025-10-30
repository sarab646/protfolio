document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeToggleMobile = document.getElementById("themeToggleMobile");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
  
    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  
    const toggleTheme = () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };
  
    themeToggle.addEventListener("click", toggleTheme);
    themeToggleMobile.addEventListener("click", toggleTheme);
    mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        mobileMenu.classList.add("hidden");
      });
    });
  });
  