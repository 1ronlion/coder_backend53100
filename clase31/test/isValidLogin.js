// Una función de login (con usuarios hardcodeados user = coderUser , password = 123)

// Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
// Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
// Si  el usuario y contraseña coinciden, consologuear (“logueado”)

let user = "coderUser",
  password = "123";

let testPasados = 0;
let testTotales = 5;

const login = (username, pass) => {
  //lógica a implementar
};
//TEST 1 -> Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
console.log(
  "Test 1: Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)"
);
let resultTest1 = login("coderUser", "");

//TEST 2 -> Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
console.log(
  "Test 2: Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)"
);
let resultTest2 = login("", "123");

//TEST 3 -> Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
console.log(
  "Test 3: Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)"
);
let resultTest3 = login("coderUser", 321);

//TEST 4 -> Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
console.log(
  "Test 4: Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)"
);
let resultTest4 = login("Manzana", "123");

//TEST 5 -> Si  el usuario y contraseña coinciden, consologuear (“logueado”)
console.log(
  "Test 5: Si  el usuario y contraseña coinciden, consologuear (“logueado”)"
);
let resultTest5 = login("coderUser", "123");

//Salidas
if (testPasados === testTotales) {
  console.log("Todos los test pasaron con éxito");
} else {
  console.log(`Se pasaron ${testPasados} de un total de ${testTotales} test`);
}
