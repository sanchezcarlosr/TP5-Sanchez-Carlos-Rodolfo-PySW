const espectadorCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/espectador', espectadorCtrl.createEspectador);
router.get('/', espectadorCtrl.getEspectadores);
router.get('/dni', espectadorCtrl.getEspectador);

module.exports = router;