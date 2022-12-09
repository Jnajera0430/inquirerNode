const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 8080;
const db = require("./db/data.json");

const requestListener = function (req, res) {
  const archivoCrear = "./db/data.json";
  const arrdbCrear = JSON.parse(fs.readFileSync(archivoCrear, "utf-8"));
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(arrdbCrear));
  res.end();
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Servidor conectado en el puerto ${port}`);
});
