function filter() {
  const filtre = document.getElementById("maRecherche").value.toUpperCase()
  console.log(filtre, "filtre")
  const tableau = document.getElementById("tableau")
  console.log(tableau, "tableau")
  const ligne = document.getElementsByClassName("weapon-container")
  console.log(ligne, "ligne")

  for (i = 0; i < ligne.length; i++) {
    const cellule = ligne[i].getElementsByTagName("div")[0]
    console.log(cellule, "cellule")
    if (cellule) {
      const texte = cellule.innerText
      console.log(texte, "texte")
      if (texte.toUpperCase().indexOf(filtre) > -1) {
        ligne[i].style.display = ""
      } else {
        ligne[i].style.display = "none"
      }
    }
  }
}

filter()
