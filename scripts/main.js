const user = "renata";
const pass = "pass123";

intentos = 3;

for (let i = 0 ; i < 3 ; i++ ){

    let u = prompt("Ingrese su usuario");
    let p = prompt("Ingrese su contraseña");

 if (u == user && p == pass) {
    alert("Bienvenido a su cuenta");
    break;
} 

intentos --; 
alert("Usuario y/o contraseña incorrectos. Te quedan "+intentos+" intentos");
 }

if (intentos <= 0 ){
    alert("Usuario bloqueado");
}


