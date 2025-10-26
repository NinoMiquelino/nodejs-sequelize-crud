const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
    // Aqui você definiria associações, se houvesse, ex: hasMany(Order)
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            // O Sequelize adiciona automaticamente 'id', 'createdAt' e 'updatedAt'
        }, {
            sequelize, // A instância de conexão
            tableName: 'customers', // Nome da tabela no banco
        });
    }
}

module.exports = Customer;
