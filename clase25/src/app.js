import express from "express";
//import { Command } from "commander";
import config from "./config.js";

import { fork } from "child_process";
const app = express();

//inicializar commader
// const program= new Command()

// program
// .option("-d", "Modo de desarrollo", false)
// .option('-p, --port <port>', "Puerto del servidor")

// program.parse(process.argv)
// process.on('exit',code=>{
//   console.log('Lo vas a ver antes de que termine el proceso ');
// })

// process.on('uncaughtException',exception=>{
//   console.log("Esto va capturar un error no controlado");
// })

// process.on('message', message=>{
//   console.log("Esto se va a ver cuando reciba un mensaje desde otro lugar");
// })

//math()

function listNumbers(...numbers) {
  const types = numbers.map((num) => typeof num);
  if (types.some((type) => type !== "number")) {
    console.log("Invalid parameters ", types);
    process.exit(-4);
    return;
  }

  console.log("Lista de numeros: ", numbers);
  console.log("Lista de tipos: ", types);
}

process.on("exit", (code) => {
  if (code === -4) {
    console.log("No pasaste los parametros necesarios deben ser numeros");
  }
});
// listNumbers(1,2,3,"r", false)
// listNumbers(1,2,3,0,674)

app.get("/", (req, res) => {
  res.send("Inicio");
});

// function operacionCompleja() {
//   let result = 0;
//   for (let i = 0; i < 5e9; i++) {
//     result += i;
//   }
//   return result;
// }
// app.get("/suma", (req, res) => {
//   const result = operacionCompleja();

//   res.send(`El resultado de la operación es: ${result}`);
// });
app.get("/suma", (req, res) => {
  const child = fork("./src/opComplex.js");
  child.send("Ejecuta el codigo");
  child.on("message", (result) => {
    res.send(`El resultado de la operacion es ${result} `);
  });
});

const port = config.port;

//console.log(config);
//listeners
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

//process
// console.log("Opciones: ", program.opts());
// console.log("Argumentos: ", program.args);
