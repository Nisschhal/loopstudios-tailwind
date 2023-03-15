const hamburgerBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

hamburgerBtn.addEventListener("click", toggleHam)

function toggleHam() {
  hamburgerBtn.classList.toggle("open")
  menu.classList.toggle("hidden")
}
