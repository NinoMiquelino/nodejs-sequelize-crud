const express = require('express');
const CustomerController = require('../controllers/CustomerController');

const router = express.Router();

// Rotas CRUD para /api/v1/customers

router.get('/', CustomerController.index); // Listar e Buscar
router.get('/:id', CustomerController.show); // Detalhe
router.post('/', CustomerController.store); // Criar
router.put('/:id', CustomerController.update); // Atualizar
router.delete('/:id', CustomerController.delete); // Deletar

module.exports = router;
