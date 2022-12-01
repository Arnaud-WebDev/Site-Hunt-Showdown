const container = document.querySelector(".container")

window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    container.style.display = "flex"
  } else {
    container.style.display = "none"
  }
})
window.addEventListener("load", () => {
  container.style.display = "none"
})
