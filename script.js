// TODO:
// - Saludar al cliente ✅
// - Mencionar las box disponibles ✅
// - En base a lo elegido calcular el precio ✅
// - Informar al cliente el costo que debe abonar ✅
// - Cobrar servicio ✅
// */

//Variables Globales

let id = 0;
let nombre = "";
let precio = 0;
let categoria = "";
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostarCajas = "";
let arrayCajas = [];

//Declaro el constructor de cajas
class Box {
  constructor(id, nombre, precio, categoria, stock) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.categoria = categoria),
      (this.stock = stock);
  }
}

//-----------FUNCIONES------------//

//funcion para ingresar una nueva caja
function ingresaCaja() {
  let nuevaCaja;
  id = ++id;
  nombre = prompt(`Ingrese el nombre de la caja ${id}.`);

  //valido precio
  do {
    precio = Number(prompt(`Ingrese el precio de la caja ${id}.`));
  } while (precio == null || precio == "" || isNaN(precio) || precio <= 0);

  categoria = prompt(
    `Cual es la categoria de la caja ${id}? Opciones posibles:\ncumpleaños\ncorporativa\nfiesta\nromantica\notra`
  );

  //valido stock
  do {
    stock = Number(prompt(`Ingrese el stock de la caja ${id}`));
  } while (stock == null || stock == "" || isNaN(stock) || stock <= 0);

  nuevaCaja = new Box(id, nombre, precio, categoria, stock);
  nuevaCaja.subtotalCajas;

  console.log(nuevaCaja);
  arrayCajas.push(nuevaCaja);
}

//funcion para recorrer el Array y mostarlo en pantalla
function recorrerArray(item, index) {
  mostarCajas += index + ":" + JSON.stringify(item) + "<br />";
}

//funcion para eliminar una caja
function eliminarCaja() {
  let preguntar = true;
  let respuesta = "";
  let borrarCaja = "";
  let cajaEncontrada = "";

  respuesta = parseInt(prompt("Desea eliminar una caja? \n\n1-Si \n2- No"));

  while (preguntar) {
    if (respuesta == 1) {
      borrarCaja = prompt("Ingrese la informacion de la caja a eliminar");
      cajaEncontrada = arrayCajas.find((caja) => caja.nombre === borrarCaja);
      //devuelve true si encuentra la caja o false caso contrario

      if (cajaEncontrada) {
        //si encontro la caja la elimina
        alert("la caja que desea eliminar ha sido encontrada");
        arrayCajas = arrayCajas.filter((caja) => caja.nombre !== eliminarCaja);
        // console.log(arrayCajas); //luego sacar esto
        preguntar = false;
      } else {
        alert("No se encontró la caja que quieres eliminar");
        respuesta = parseInt(
          prompt("Desea eliminar una caja? \n\n1-Si \n2-No")
        );
      }
    } else if (respuesta == 2) {
      alert("Ha seleccionado no eliminar cajas");
      preguntar = false;
    } else {
      alert(
        "La opción selecionada no es valida. Ingrese 1 para eliminar una caja, o 2 para avanzar"
      );
      respuesta = parseInt(prompt("Desea eliminar una caja? \n\n1-Si \n2- No"));
    }
  }
}

//saludo Al usuario.
alert("Bienvenido al panel de Administración de NunchiBox ");

//le indico la accion que va a poder realizar
respuesta = parseInt(
  prompt(
    "Seleccione la opción correspondiente a la acción del menú que desea realiazar. \n\n1- Agregar Productos\n2- Salir"
  )
);

do {
  //si respuesta es 1 llamo funcion ingresa caja nueva
  if (respuesta == 1) {
    ingresaCaja();
    alert("Nueva Caja agregada exitosamente");
    //luego de que agrega caja pregunto de nuevo que quiere hacer
    respuesta = parseInt(
      prompt(
        "Seleccione la opción correspondiente a la acción del menú que desea realiazar. \n\n1- Agregar Prductos\n2- Salir"
      )
    );
    //si selecciona 2 salimos del programa
  } else if (respuesta == 2) {
    repetir = false;
    alert("Ha seleccionado salir");
  } else {
    //si selecciona otra cosa, le pedimos que intente de nuevo
    alert("La opción selccionada es incorrecta. Por favor intente de nuevo");
    respuesta = parseInt(
      prompt(
        "Seleccione la opción correspondiente a la acción del menú que desea realiazar. \n\n1- Agregar Productos\n2- Salir"
      )
    );
  }
} while (repetir);

arrayCajas.forEach(recorrerArray);
alert(JSON.stringify(arrayCajas));
console.log(arrayCajas);
document.getElementById("resumenCajas").innerHTML = mostarCajas;

eliminarCaja();

arrayCajas.forEach(recorrerArray);
alert(JSON.stringify(arrayCajas));
console.log(arrayCajas);
