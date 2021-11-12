const express = require('express');
const router = express.Router();
const sesionController = require('../controllers/sesionController');
const connection = require('../../database');

//Lista de sesiones
router.get('/sesiones', sesionController.listaSesion);

//Sesion seleccionado por id
router.get('/sesiones/:id', sesionController.listaSesionPorId);

//Agrega una nueva sesion
router.post('/sesiones', sesionController.agregaSesion)

//Actualiza una sesion por id
router.put('/sesiones/:id', sesionController.actualizaSesion)

//Elimina una sesion por id
router.delete('/sesiones/:id', sesionController.eliminaSesion)

module.exports = router;