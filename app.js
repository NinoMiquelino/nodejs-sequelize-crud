const express = require('express');
const connection = require('./src/models/index'); // Importa a conexão configurada
const customerRoutes = require('./src/routes/customerRoutes');

const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// --- SINCRONIZAÇÃO COM O BANCO ---
// O comando .sync() força o Sequelize a criar as tabelas se elas não existirem.
connection.sync()
    .then(() => {
        console.log('✅ Banco de dados conectado e sincronizado com sucesso.');
    })
    .catch((error) => {
        console.error('❌ Falha na conexão ou sincronização do banco de dados:', error);
        // Em produção, você não travaria o app, mas logaria o erro.
        process.exit(1); 
    });


// --- ROTAS ---
const API_PREFIX = '/api/v1/customers';
app.use(API_PREFIX, customerRoutes);


// Rota base para teste
app.get('/', (req, res) => {
    res.send('API CRUD de Clientes rodando. Acesse /api/v1/customers');
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${PORT}`);
    console.log('Use CTRL+C para sair.');
});
