//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/transaccion', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/monedas-origen-destino', transaccionCtrl.getTransaccionesMonedas);
router.get('/email-cliente', transaccionCtrl.getTransaccionesPorEmail);

module.exports= router;