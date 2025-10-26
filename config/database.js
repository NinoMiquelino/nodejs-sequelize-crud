module.exports = {
    // Configurações do ambiente de desenvolvimento
    development: {
        username: 'postgres', // Seu usuário do PostgreSQL
        password: 'sua_senha', // Sua senha
        database: 'node_crud', // Nome do banco de dados que você criou
        host: 'localhost',
        dialect: 'postgres', // Usando o PostgreSQL
        define: {
            timestamps: true, // Adiciona createdAt e updatedAt
            underscored: true, // Usa snake_case (nome_campo)
        }
    },
    // Adicionar aqui configurações de 'test' e 'production'
};
