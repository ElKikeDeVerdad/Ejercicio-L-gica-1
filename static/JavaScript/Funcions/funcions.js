function mostrarResultado(ejercicio, resultado) {
  const contenedor = document.createElement("div");
  const parrafo = document.createElement("p");
  
  parrafo.innerHTML = `${ejercicio} ${resultado}`;// `${ejercicio} ${resultado}`
  console.log("parrafo ",parrafo)
  contenedor.append(parrafo);
  document.body.append(contenedor);
}

export {
    mostrarResultado
}