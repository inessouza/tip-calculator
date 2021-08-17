const express = require('express');

const server = express();

// função para reconhecer informações e json
server.use(express.json());

server.listen(3005, function() {
console.log("Servidor online");
});