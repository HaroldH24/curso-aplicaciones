const express = require('express');
const router = express.Router();
const mentorizadoController = require('../controllers/mentorizadoController');
const connection = require('../../database');

//Lista de mentorizados
router.get('/mentorizados', mentorizadoController.listaMentorizado);

//Mentorizado seleccionado por id
router.get('/mentorizados/:id', mentorizadoController.listaMentorizadoPorId);

//Agrega un nuevo mentorizado
router.post('/mentorizados', mentorizadoController.agregaMentorizado);

//Actualiza un mentorizado por  id
router.put('/mentorizados/:id', mentorizadoController.actualizaMentorizado);

//Elimina un mentorizado por id
router.delete('/mentorizados/:id', mentorizadoController.eliminaMentorizado);


module.exports = router;