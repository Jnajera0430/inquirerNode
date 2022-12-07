const { resolve } = require("path");

require("colors");

const mostrarMenu = () => {
  return new Promise(resolve => {
    console.log("===============================".green);
    console.log("      Menu de opciones    ".green);
    console.log("===============================\n".green);

    console.log(`${"1.".green}Crear tarea`);
    console.log(`${"2.".green}Listar tarea`);
    console.log(`${"3.".green}Listar tarea completadas`);
    console.log(`${"4.".green}Listar tareas pendiente`);
    console.log(`${"5.".green}Completar tarea(s)`);
    console.log(`${"6.".green}Borrar tarea`);
    console.log(`${"0.".green}Salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion: ", (res) => {
      readline.close();
      resolve(res);
    });
  });
};

const pausa = () => {
  return new Promise(resolve => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      `\n Presione ${"Enter".green} para continuar\n`,
      (res) => {
        readline.close();
        resolve();
      }
    );
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
