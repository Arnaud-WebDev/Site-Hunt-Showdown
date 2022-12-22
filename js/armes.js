function filter() {
  const filtre = document.getElementById("maRecherche").value.toUpperCase()
  const tableau = document.getElementById("tableau")
  const ligne = document.getElementsByClassName("weapon-container")

  for (i = 0; i < ligne.length; i++) {
    const cellule = ligne[i].querySelectorAll(".title-arme")[0]
    if (cellule) {
      const texte = cellule.innerText
      if (texte.toUpperCase().indexOf(filtre) > -1) {
        ligne[i].style.display = ""
      } else {
        ligne[i].style.display = "none"
      }
    }
  }
}

filter()
