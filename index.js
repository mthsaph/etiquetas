const express = require('express');
const path = require('path');

// Inicializa o app Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

// Rota específica para o arquivo JavaScript
app.get('/pjeoffice-pro.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pjeoffice-pro.js'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
