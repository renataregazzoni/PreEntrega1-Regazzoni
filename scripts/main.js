const USER = "renata";
const PASS = "pass123";

intentos = 3;

for (let i = 0; i < 3; i++) {
  let u = prompt("Ingrese su usuario");
  let p = prompt("Ingrese su contraseña");

  if (u == USER && p == PASS) {
    alert("Bienvenido a su cuenta");
    break;
  }

  intentos--;
  alert(
    "Usuario y/o contraseña incorrectos. Te quedan " + intentos + " intentos"
  );
}

if (intentos <= 0) {
  alert("Usuario bloqueado");
}

// Defini un objeto que contiene la información de los productos
let product = {
  1: {
    name: "Producto 1",
    price: 10,
  },
  2: {
    name: "Producto 2",
    price: 15,
  },
  3: {
    name: "Producto 3",
    price: 20,
  },
};

// Cree una función para obtener el precio de un producto por su nombre
function getProductPrice(name) {
  return product[name].price;
}

// Cree una función para calcular el precio total de los productos seleccionados
function calculateTotalPrice(selectedProducts) {
  let totalPrice = 0;
  for (let i = 0; i < selectedProducts.length; i++) {
    let product = selectedProducts[i];
    totalPrice += getProductPrice(product);
  }
  return totalPrice;
}

// Cree un array con los nombres de los productos a vender
const productsNames = ["1", "2", "3"];

// Pido al usuario que seleccione los productos que desea comprar
let selectedProduct = [];
while (true) {
  const input = prompt(
    `Selecciona un producto (${productsNames.join(
      ", "
    )}) o presiona Cancelar para finalizar:`
  );
  if (input === null) {
    break;
  }
  if (!productsNames.includes(input)) {
    alert("Producto inválido");
    continue;
  }
  selectedProduct.push(input);
}

// Calcule el precio total de los productos seleccionados
let totalPrice = calculateTotalPrice(selectedProduct);

// Mostre el precio total al usuario
alert(`El precio total de los productos seleccionados es ${totalPrice}`);

function despedir() {
  let nombre = "renata";
  let alerta = alert("Gracias por tu compra " + nombre + "!");
  return alerta;
}
despedir();
