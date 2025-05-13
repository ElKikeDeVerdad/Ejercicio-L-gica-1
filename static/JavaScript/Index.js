import { enunciadosExercicios } from "./Datos/datos.js";
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
import { mostrarResultado } from "./Funcions/funcions.js";

/**Ejercicio 1 */
mostrarResultado(enunciadosExercicios.exercicio1, numAfectados());

/**Ejercicio 2 */
mostrarResultado(enunciadosExercicios.ejercicio2, numPersoasSanas());

/**Ejercicio 3 */
mostrarResultado(enunciadosExercicios.ejercicio3, numPersoasInfectadasPais());

/**Ejercicio 4 */
mostrarResultado(enunciadosExercicios.ejercicio4, mayorPaisInfectado());

/**Ejercicio 5 */
mostrarResultado(enunciadosExercicios.ejercicio5, nombreMascota());

/**Ejercicio 6*/
mostrarResultado(enunciadosExercicios.ejercicio6, datosPersonasInfectadas());

/**Ejercicio 7 */
mostrarResultado(enunciadosExercicios.ejercicio7, datosEspañolesPerro());

/**Ejercicio 8 */
mostrarResultado(enunciadosExercicios.ejercicio8, PersonasConMascota());

/**Ejercicio 9 */
mostrarResultado(enunciadosExercicios.ejercicio9, masCantidadMascota());

/**Ejercicio 10 */
mostrarResultado(enunciadosExercicios.ejercicio10, totalPatasMascota());

/**Ejercicio 11 */
mostrarResultado(enunciadosExercicios.ejercicio11, mascotaCuatroPatas()) ;

/**Ejercicio 13 */
mostrarResultado(enunciadosExercicios.ejercicio13, loroPersona());

/**Ejercicio 14 */
mostrarResultado(enunciadosExercicios.exercicio14,infectadosPaisPorAnimal())
  