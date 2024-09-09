const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// Criar uma nova pessoa
router.post('/pessoas', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const person = await Person.create({ nome, cpf, telefone });
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Listar todas as pessoas
router.get('/pessoas', async (req, res) => {
  try {
    const people = await Person.findAll();
    res.json(people);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
