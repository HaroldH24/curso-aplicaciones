const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');
const connection = require('../../database');

//Lista de mentores
router.get('/mentores', mentorController.listaMentores);

//Mentor seleccionado por id
router.get('/mentores/:id', mentorController.listaMentorPorId);

//Agrega un nuevo mentor
router.post('/mentores', mentorController.agregaMentor);

//Actualiza un mentor por  id
router.put('/mentores/:id', mentorController.actualizaMentor);

//Elimina un mentor por id
router.delete('/mentores/:id', mentorController.eliminaMentor);


module.exports = router;