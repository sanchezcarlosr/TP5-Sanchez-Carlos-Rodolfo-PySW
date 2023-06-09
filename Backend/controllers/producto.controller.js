const Producto = require('../models/Producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.createProducto = async (req, res) =>{
    var producto = new Producto(req.body);
    try{
        await producto.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Producto guardado. '
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
productoCtrl.deleteProducto = async (req, res) =>{
    try{
        await Producto.deleteOne({_id: req.query.id});
        res.status(200).json({
            'status': '1',
            'msg': 'Producto eliminado'
        }) 
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
productoCtrl.editProducto= async (req, res) => {
    const producto = new Producto(req.body);
    try{
        await Producto.updateOne({_id: req.query.id}, producto);
        res.status(200).json({
            'status': '1',
            'msg': 'Producto modificado'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error en la modificacion del producto'
        })
    }
}
productoCtrl.getProductosDestacados = async (req, res) => {
    var productos = await Producto.find({destacado: true});
    res.json(productos);
}
module.exports = productoCtrl;