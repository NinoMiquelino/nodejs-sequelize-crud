const { Op } = require('sequelize');
const Customer = require('../models/Customer'); // Sequelize injeta o modelo na connection

module.exports = {

    // --- READ (Listar Todos ou Buscar) ---
    async index(req, res) {
        const { search } = req.query;
        let where = {};

        // Adiciona funcionalidade de busca simples por nome ou email
        if (search) {
            where = {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${search}%` } }, // Busca case-insensitive
                    { email: { [Op.iLike]: `%${search}%` } }
                ]
            };
        }

        try {
            const customers = await Customer.findAll({ where });
            return res.json(customers);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar clientes.' });
        }
    },

    // --- READ (Detalhe) ---
    async show(req, res) {
        const { id } = req.params;
        try {
            const customer = await Customer.findByPk(id);

            if (!customer) {
                return res.status(404).json({ error: 'Cliente não encontrado.' });
            }
            return res.json(customer);
        } catch (error) {
             return res.status(500).json({ error: 'Erro ao buscar cliente.' });
        }
    },

    // --- CREATE ---
    async store(req, res) {
        const { name, email, phone } = req.body;

        try {
            // Verifica se o email já existe
            if (await Customer.findOne({ where: { email } })) {
                return res.status(400).json({ error: 'Email já cadastrado.' });
            }
            
            const customer = await Customer.create({ name, email, phone });
            
            return res.status(201).json(customer); // 201 Created
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: 'Erro ao cadastrar cliente. Verifique os dados.' });
        }
    },

    // --- UPDATE ---
    async update(req, res) {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        try {
            const [updated] = await Customer.update({ name, email, phone }, {
                where: { id: id }
            });

            if (updated) {
                const updatedCustomer = await Customer.findByPk(id);
                return res.json(updatedCustomer);
            }
            
            return res.status(404).json({ error: 'Cliente não encontrado para atualização.' });

        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: 'Erro ao atualizar cliente.' });
        }
    },

    // --- DELETE ---
    async delete(req, res) {
        const { id } = req.params;

        try {
            const deleted = await Customer.destroy({
                where: { id: id }
            });

            if (deleted) {
                return res.status(204).send(); // 204 No Content
            }
            
            return res.status(404).json({ error: 'Cliente não encontrado para exclusão.' });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao excluir cliente.' });
        }
    }
};
