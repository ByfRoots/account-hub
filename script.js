function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag image
  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver lightmode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito Sorrindo, usando oculos de sol, jaqueta e fundo azul"
    )
  } else {
    // se tiver sem lightmode, manter a imagem normal
    img.setAttribute("src", "/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito Sorrindo, usando oculos de grau, jaqueta e fundo azul"
    )
  }
}
