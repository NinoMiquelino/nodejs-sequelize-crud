const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const CustomerModel = require('./Customer'); // Importa o modelo

// Pega a configuração de 'development'
const config = dbConfig.development;

// Cria a instância de conexão do Sequelize
const connection = new Sequelize(config.database, config.username, config.password, config);

// Inicializa o(s) modelo(s)
CustomerModel.init(connection);

// Se houver associações entre modelos, elas seriam definidas aqui

module.exports = connection; // Exporta a conexão para ser usada em app.js
