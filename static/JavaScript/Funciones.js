import { animals, countries, persons, pets } from "./datosEjercicio.js";
export {
  numAfectados,
  numPersoasSanas,
  numPersoasInfectadasPais,
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
};

//*Ejercicio 1*//

function numAfectados() {
  let numAfectados = 0;
  for (let contador = 0; contador < persons.length; contador++) {
    //console.log("persons[", contador, "]", persons[contador]);

    if (persons[contador].infected) {
      numAfectados++;
    }
  }

  return numAfectados;
}

//*Ejercicio 2*//

function numPersoasSanas() {
  let numPersoasSanas = 0;
  for (let contador = 0; contador < persons.length; contador++) {
    //console.log("persons[", contador, "]", persons[contador]);

    if (persons[contador].infected == false) {
      numPersoasSanas++;
    }
  }

  return numPersoasSanas;
}

//*Ejercicio 3*//

function numPersoasInfectadasPais() {
  let numPersoasInfectadasPorPais = 0;
  for (let contador = 0; contador < countries.length; contador++) {
    numPersoasInfectadasPorPais =
      numPersoasInfectadasPorPais + countries[contador].infected;
  }

  return numPersoasInfectadasPorPais;
}

//*Ejercicio 4*//

function mayorPaisInfectado() {
  let paisesInfectados = 0;
  let masInfectadoPais = "";
  for (let paises of countries) {
    if (paises.infected > paisesInfectados) {
      paisesInfectados = paises.infected;
      masInfectadoPais = paises.name;
    }
  }

  return masInfectadoPais;
}

const paisConMasInfecciones = mayorPaisInfectado();
console.log("País con más infectados:", paisConMasInfecciones);

//*Ejercicio 5*//

function nombreMascota() {
  let nomMascotas = [];
  let nombMascotas = "";
  for (let { name } of pets) {
    console.log(name);
    nomMascotas.push(name);

    nombMascotas = nomMascotas;
  }
  return nombMascotas;
}
//*Ejercicio 6*//

function datosPersonasInfectadas() {
  let datosPerInfect = [];
  for (let persona of persons) {
    if (persona.infected) datosPerInfect.push(persona);
  }
  return datosPerInfect;


  
}

console.log("Personas Infectadas", datosPersonasInfectadas);

//*Ejercicio 7*//

function datosEspañolesPerro() {
  let españolesConPerro = [];
  for (let personasEspañolas of persons) {
    if (personasEspañolas.country === "ES") {
      for (let mascota of pets) {
        if (
          mascota.name === personasEspañolas.pet &&
          mascota.type === "perro"
        ) {
          españolesConPerro.push(personasEspañolas.name);
        }
      }
    }
  }
  return españolesConPerro;
}

//*Ejercicio 8*//

function PersonasConMascota() {
  let personasMascota = [];
  for (let persona of persons) {
    for (let mascota of pets) {
      if (mascota.name === persona.pet) {
        personasMascota.push({
          persona: persona.name,
          mascota: {
            nombre: mascota.name,
            tipo: mascota.type,
          },
        });
      }
    }
  }
  return personasMascota;
}

//*Ejercicio 9*//
function masCantidadMascota() {
  let conteoTipos = [];
  /* creando un objeto de tipo, cantidad
  [tipo, numero]*/

  for (let persona of persons) {
    for (let mascotas of pets) {
      if (persona.name === mascotas.name) {
        let tipo = pet.type;
        let encontrado = false;

        /* Bucle que recorre a cada persona, aqui estoy creando la variable tipo que permite
          sacar el tipo de animal usando el array de personas*/

        /* Inicializo encontrado para hacer un !encontrado, se utiliza por si en el futuro
          se quiere agregar otro tipo de animal, lo que esta haciendo es saber si ya contamos
          el tipo de mascota, es decir, si ya existe, entonces = false, por lo que no tiene
          que hacer el conteo que viene a continuacion */

        for (
          let contadorTipos = 0;
          contadorTipos < conteoTipos.length;
          contadorTipos++
        ) {
          if (conteoTipos(contadorTipos).tipo === tipo) {
            conteoTipos(contadorTipos).cantidad++;
            encontrado = true;
          }
        }

        if (!encontrado) {
          conteoTipos.push({
            tipo: tipo,
            cantidad: 1,
          });
        }
      }

      /*  se tiene la condicion if(!encontrado), que lo que dice es que si conteoTipos.tipo
    es igual a tipo que es pet.type en el bucle anterior, entonces hara un objeto llamado
    conteoTipos con forma [tipo, cantidad], en donde si el valor tipo es igual al valor
    tipo creado en el bucle anterior, sumara una unidad (++), al tener un
    elemento ! hay que inicializarlo con un false y despues un true o viceversa. */

      /* Ahora buscamos en ese objeto nuevo, en el valor de cantidad, cual es mayor */
    }
  }

  let mayorTipo = "";
  let mayorCantidadTipos = 0;
  for (let tipo of conteoTipos) {
    if (tipo.cantidad > mayorCantidadTipos) {
      mayorCantidadTipos = tipo.cantidad;
      mayorTipo = tipo.tipo;
    }
  }
  return mayorTipo;
}

//*Ejercicio 10*//

function totalPatasMascota() {
  let conteoTipo = [];

  for (let persona of persons) {
    for (let mascota of pets) {
      if (persona.pet === mascota.name) {
        let tipo = mascota.type;
        let encontrado = false;

        for (
          let contadorTipos = 0;
          contadorTipos < conteoTipo.length;
          contadorTipos++
        ) {
          if (conteoTipo[contadorTipos].tipo === tipo) {
            conteoTipo[contadorTipos].cantidad++;
            encontrado = true;
          }
        }

        if (!encontrado) {
          conteoTipo.push({ tipo: tipo, cantidad: 1 });
        }
      }
    }
  }
  let totalPatas = 0;

  for (let patas of conteoTipo) {
    for (let animal of animals) {
      if (animal.kind === patas.tipo) {
        totalPatas += patas.cantidad * animal.legs;
      }
    }
  }

  return totalPatas;
}
/** 
 MANERA MAS FACIL

 function totalPatasMascota() {
  let totalPatas = 0;

  for (let persona of persons) {
    // Encontrar qué mascota tiene esta persona
    for (let mascota of pets) {
      if (persona.pet === mascota.name) {
        let tipoMascota = mascota.type;

        // Buscar cuántas patas tiene ese tipo de animal
        for (let animal of animals) {
          if (animal.kind === tipoMascota) {
            totalPatas += animal.legs;
          }
        }
      }
    }
  }

  return totalPatas; */

//*Ejercicio 11*//
function mascotaCuatroPatas() {
  let nombrePersona = [];
  for(let persona of persons){
    for(let mascota of pets){
      if (persona.pet === mascota.name){
        let tipo = mascota.type;

        for(let animales of animals){
          if(tipo === animales.kind){
            if(animales.legs === 4){
              nombrePersona.push(persona.name);

            }

          }

        }
      }

    }
  }
  return nombrePersona
}


//*Ejercicio 12*//
/** Este ejercicio no se puede */

//*Ejercicio 13*//
function loroPersona() {
  let personasLoroPais = [];

  for (let persona of persons) {
    for (let mascota of pets) {
      if (persona.pet === mascota.name && mascota.type === "loro") {
        for (let pais of countries) {
          if (persona.country === pais.code) {
            // Evitar duplicados (opcional)
            if (!personasLoroPais.includes(pais.name)) {
              personasLoroPais.push(pais.name);
            }
          }
        }
      }
    }
  }

  return personasLoroPais;
}



//*Ejercicio 14*//
function infectadosPaisPorAnimal() {
  let infectadosTotales = 0;

  for (let persona of persons) {
    for (let mascota of pets) {
      if (persona.pet === mascota.name) {
        let tipo = mascota.type;

        for (let animal of animals) {
          if (tipo === animal.kind && animal.legs === 8) {
            for (let pais of countries) {
              if (persona.country === pais.code) {
                infectadosTotales += pais.infected;
              }
            }
          }
        }
      }
    }
  }

  return infectadosTotales;
}
  

