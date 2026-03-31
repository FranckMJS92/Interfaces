const html = document.documentElement;
const desktopToggle = document.getElementById("theme-toggle");
const mobileToggle = document.getElementById("theme-toggle-mobile");

function updateIcons() {
  const isDark = html.classList.contains("dark");

  document.querySelectorAll(".theme-icon-light").forEach((icon) => {
    icon.classList.toggle("hidden", isDark);
  });

  document.querySelectorAll(".theme-icon-dark").forEach((icon) => {
    icon.classList.toggle("hidden", !isDark);
  });
}

function toggleTheme() {
  html.classList.toggle("dark");
  updateIcons();
}

desktopToggle?.addEventListener("click", toggleTheme);
mobileToggle?.addEventListener("click", toggleTheme);

updateIcons();