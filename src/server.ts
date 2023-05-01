const express = require('express');
const app = express();

// Define a rota para a página inicial
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicie o servidor
app.listen(7000, () => {
  console.log('Servidor rodando na porta 7000');
});