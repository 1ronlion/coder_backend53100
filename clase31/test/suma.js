// La función debe devolver null si algún parámetro no es numérico.
// La función debe devolver 0 si no se pasó ningún parámetro
// La función debe poder realizar la suma correctamente.
// La función debe poder hacer la suma con cualquier cantidad de números.

let testPasados = 0,
  testTotales = 4;

// function suma(num1, num2) {
//   if (!num1 || !num2) return 0;//test 2
//   if (typeof num1 !== "number" || typeof num2 !== "number") return null; //test1

//   return num1 + num2 // test 3
// }
function suma(...nums) {

  if(nums.length === 0) return 0;//test 2
  if (!nums.every((num) => typeof num === "number")) return null;
  return nums.reduce((prev, current) => prev + current, 0);
}
//TEST 1 -> La función debe devolver null si algún parámetro no es numérico
console.log(
  "Test 1: La función debe devolver null si algún parámetro no es numérico."
);

let resultTest1 = suma("3", 4);

if (resultTest1 === null) {
  console.log("Test 1 pasado");
  testPasados++;
} else {
  console.log(
    `Test 1 no pasó, se esperaba null se recició ${typeof resultTest1} `
  );
}

//TEST 2 -> La función debe devolver 0 si no se pasó ningún parámetro
console.log(
  "Test 2: La función debe devolver 0 si no se pasó ningún parámetro"
);
let resultTest2 = suma();

if (resultTest2 === 0) {
  console.log("Test 2 pasado");
  testPasados++;
} else {
  console.log(
    `EL test 2 no pasó, se recibió ${typeof resultTest2} y se esperaba 0`
  );
}

//TEST 3 -> La función debe poder realizar la suma correctamente.
console.log("Test 3: La función debe poder realizar la suma correctamente.");
let resultTest3 = suma(2, 3);
if (resultTest3 === 5) {
  console.log("Test 3 pasado");
  testPasados++;
} else {
  console.log(
    `Test 3 no pasado. Se recibió ${resultTest3}, pero se esperaba 6`
  );
}
//TEST 4 -> La función debe poder hacer la suma con cualquier cantidad de números.
console.log(
  "Test 4: La función debe poder hacer la suma con cualquier cantidad de números."
);
let resultTest4 = suma(1, 2, 3, 4, 5);
if (resultTest4 === 15) {
  console.log("Test 4 pasado");
  testPasados++;
} else {
  console.log(
    `Test 4 no pasado. Se recibió ${resultTest4}, pero se esperaba 15`
  );
}
//salida
if (testPasados === testTotales) {
  console.log("Todos los test pasaron");
} else {
  console.log(`Se pasaron ${testPasados} de un total de ${testTotales} test`);
}
