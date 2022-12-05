// BARRE DE NAVIGATION
const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    })
    //Burger Animation
    burger.classList.toggle("toggle")
  })
}

navSlide()
// BARRE DE NAVIGATION FIN

// BOUTON POUR REMONTER EN HAUT

const btn = document.querySelector(".btn, .btn-armes")

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // permet de remonter tranquillement vers le haut
  })
})

// BOUTON POUR REMONTER EN HAUT FIN

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btn.style.transition = "all 0.5s ease-in-out"
    btn.style.opacity = 1
    btn.style.visibility = "visible"
  } else {
    btn.style.opacity = 0
    btn.style.visibility = "hidden"
  }
})
window.addEventListener("load", () => {
  btn.style.opacity = 0
})
