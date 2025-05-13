import {
  numAfectados,
  numPersoasInfectadasPais,
  numPersoasSanas,
  nombreMascota,
  datosPersonasInfectadas,
  mayorPaisInfectado,
  datosEspañolesPerro,
  PersonasConMascota,
  masCantidadMascota,
  totalPatasMascota,
  mascotaCuatroPatas,
  loroPersona,
  infectadosPaisPorAnimal,

} from "./Funciones.js";

const numAfectadosExer1 = numAfectados();
console.log("Exercicio 1: Número de persoas infectadas ", numAfectadosExer1);
mostrarResultado("Ejercicio 1 - Número de persoas infectadas", numAfectadosExer1);;

const numPersoasSanasExer2 = numPersoasSanas();
console.log(
  "Exercicio 2: Número de persoas non infectadas ",
  numPersoasSanasExer2
);

const numPersoasInfectadasPorPais = numPersoasInfectadasPais();
console.log(
  "Exercicio 3: Número de persoas infectadas nos países do array ",
  numPersoasInfectadasPorPais
);

const paisMasInfectadoEjercicio4 = mayorPaisInfectado();
console.log("Ejercicio 4: Mayor Pais Infectado", paisMasInfectadoEjercicio4);

const nombreMascotaEjercicio5 = nombreMascota();
console.log("Ejercicio 5: Nombre de las mascotas", nombreMascotaEjercicio5);

const datosPersonasInfectadasEjercicio6 = datosPersonasInfectadas();
console.log(
  "Ejercicio 6: Personas Infectadas",
  datosPersonasInfectadasEjercicio6
);

const EspañolesPerroEjercicio7 = datosEspañolesPerro();
console.log(
  "Ejercicio 7: personas españolas con perro",
  EspañolesPerroEjercicio7
);

const PersonasYMascotaEjercicio8 = PersonasConMascota();
console.log(
  "Ejercicio 8: personas con los datos de su mascota:",
  PersonasYMascotaEjercicio8
);

const masPersonasMascotaEjercicio9 = masCantidadMascota();
console.log(
  "Ejercicio 9: el animal que mas personas tienen es",
  masPersonasMascotaEjercicio9
);

const todasPatasMascotas = totalPatasMascota();
console.log(
  "Ejercicio 10: el numero total de patas de las mascotas es: ",
  todasPatasMascotas
);

const personasAnimalesCuatroPatas = mascotaCuatroPatas();
console.log(
  "Ejercicio 11: las personas que tienen mascotas que tienen 4 patas son: ", personasAnimalesCuatroPatas
);

const personasLoroPaisNombre = loroPersona();
console.log(
  "Ejercicio 13: los paises que tienen personas con loro son: ", personasLoroPaisNombre
)

const totalInfectadosPaisesPorMascota = infectadosPaisPorAnimal();
console.log(
  "Ejercicio 14: el numero total de infectados de paises con personas que tienen mascotas con 8 patas es: ", totalInfectadosPaisesPorMascota
)


const contenedor = document.createElement("div");
document.body.append(contenedor);


function mostrarResultado(titulo, resultado) {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = titulo, resultado;
  contenedor.append(parrafo);
}
  