function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// function toggleDarkMode() {
//   const stylesheet = document.getElementById("stylesheet");
//   if (stylesheet.getAttribute("href") === "style-light.css") {
//     stylesheet.setAttribute("href", "style-dark.css");
//   } else {
//     stylesheet.setAttribute("href", "style-light.css");
//   }
// }

