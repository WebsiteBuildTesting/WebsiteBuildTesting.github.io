document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("nav_menu");
  const toggleBtn = document.getElementById("toggle_btn");
  const closeBtn = document.getElementById("close_btn");

  // Toggle navigation menu
  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close navigation menu
  closeBtn.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});
