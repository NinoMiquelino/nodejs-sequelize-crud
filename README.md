## 👨‍💻 Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 👥 Gerenciamento de Clientes (Express, PostgreSQL e Sequelize)

![Made with Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Framework Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![RESTful API](https://img.shields.io/badge/API-RESTful-ff6f00)
![License MIT](https://img.shields.io/badge/License-MIT-green)
![Status Stable](https://img.shields.io/badge/Status-Stable-success)
![Version 1.0.0](https://img.shields.io/badge/Version-1.0.0-blue)
![GitHub stars](https://img.shields.io/github/stars/NinoMiquelino/nodejs-sequelize-crud?style=social)
![GitHub forks](https://img.shields.io/github/forks/NinoMiquelino/nodejs-sequelize-crud?style=social)
![GitHub issues](https://img.shields.io/github/issues/NinoMiquelino/nodejs-sequelize-crud)

Este projeto implementa uma API RESTful completa (CRUD) para gerenciar clientes. O objetivo principal é dominar a integração do ecossistema Node.js com um banco de dados relacional robusto (**PostgreSQL**) utilizando o poderoso ORM **Sequelize**.

O foco está na arquitetura em camadas (Rotas -> Controller -> Model), que é o padrão da indústria para aplicações Express.

---

## 🚀 Arquitetura e Destaques

* **ORM Sequelize:** Utilizado para definir o modelo de dados e realizar todas as operações CRUD sem a necessidade de escrever SQL puro.
* **PostgreSQL:** Banco de dados relacional de alta performance e confiabilidade.
* **Arquitetura MVC (parcial):** Separação clara entre Rotas (`customerRoutes`), Lógica de Negócio (`CustomerController`) e Persistência de Dados (`Customer.js/models`).
* **Conexão e Sincronização:** O `app.js` é responsável por estabelecer a conexão com o banco e garantir que a tabela de clientes (`customers`) seja criada automaticamente via `connection.sync()`.
* **Assincronicidade:** Domínio total do uso de `async/await` para lidar com operações de I/O de banco de dados.

---

## 🛠️ Tecnologias Utilizadas

* **Backend:** Node.js
* **Framework:** Express.js
* **Banco de Dados:** PostgreSQL
* **ORM:** Sequelize
* **Drivers:** `pg` e `pg-hstore`
* **Ferramentas:** npm, nodemon

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

1.  **Node.js** (versão 14+) e **npm** instalados.
2.  **PostgreSQL Server** instalado e rodando localmente.
3.  Um **banco de dados vazio** criado. Exemplo: `node_crud`.

### 1. Ajuste de Configuração

**Antes de instalar**, edite o arquivo `config/database.js` com suas credenciais de acesso ao PostgreSQL:

```javascript
// config/database.js

module.exports = {
    development: {
        username: 'SEU_USUARIO_POSTGRES', // <-- MUDAR AQUI!
        password: 'SUA_SENHA_POSTGRES', // <-- MUDAR AQUI!
        database: 'node_crud', // Nome do banco que você criou
        host: 'localhost',
        dialect: 'postgres', 
        // ...
    },
};
```

### 2. Instalação de Dependências

​Abra o terminal na pasta raiz do projeto (/nodejs-sequelize-crud) e execute:

1. Inicializa o projeto
npm init -y

2. Instala as dependências de produção (Express, Sequelize, Drivers do PG)
npm install express sequelize pg pg-hstore

3. Instala o nodemon para desenvolvimento
npm install -D nodemon

---

## 🧩 Estrutura do Projeto

Certifique-se de que sua estrutura de arquivos está organizada da seguinte forma:

```
nodejs-sequelize-crud/
├── app.js
├── package.json
├── README.md
├── .gitignore
├── 📁 config/
│      └── database.js 
└── 📁 src/
         ├── 📁 models/
         │      ├── Customer.js      
         │      └── index.js 
         ├── 📁 controllers/         
         │      └── CustomerController.js 
         └── 📁 routes/         
                  └── customerRoutes.js                            
```

---

## 🚀 Execução do Servidor

​Para iniciar a API em modo de desenvolvimento:

```bash
npm start
```

O servidor estará ativo em: http://localhost:3000

​Ao iniciar, o Sequelize irá automaticamente conectar-se ao banco e criar a tabela customers se ela ainda não existir.

Endpoints da API (Testes)

Utilize ferramentas como Postman, Insomnia ou cURL para testar os endpoints da API.

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/nodejs-sequelize-crud/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/nodejs-sequelize-crud/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
