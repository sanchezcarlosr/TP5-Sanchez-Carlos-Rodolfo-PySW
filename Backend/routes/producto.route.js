//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', productoCtrl.getProductos);
router.post('/producto', productoCtrl.createProducto);
router.delete('/producto', productoCtrl.deleteProducto);
router.put('/producto', productoCtrl.editProducto);
router.get('/destacados', productoCtrl.getProductosDestacados);
// router.get('/:id', agenteCtrl.getAgente);
// router.put('/:id', agenteCtrl.editAgente);
// router.delete('/:id', agenteCtrl.deleteAgente);
//exportamos el modulo de rutas
module.exports = router;