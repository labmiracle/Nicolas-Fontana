const http = require('http');
require('dotenv').config();
const config = require('./config');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola, este es un servidor Node configurado con objeto de configuración.');
});

server.listen(config.port, () => {
  console.log(`Servidor Node escuchando en el puerto ${config.port}`);
});
