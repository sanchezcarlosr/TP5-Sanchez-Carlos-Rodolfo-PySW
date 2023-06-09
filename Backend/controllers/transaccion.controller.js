const Transaccion = require("../models/Transaccion");
const transaccionCtrl={}

transaccionCtrl.createTransaccion = async (req, res)=>{
    // req.body.cantidadDestino = req.body.cantidadOrigen * req.body.tasaConversion;
    var transaccion = new Transaccion(req.body);
    try{
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion registrada. '
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'La transaccion no pudo ser registrada'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) =>{
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesPorEmail = async (req, res) =>{
    var transacciones = await Transaccion.find({ emailCliente: req.query.email});
    res.json(transacciones);
}

transaccionCtrl.getTransaccionesMonedas = async (req, res) => {
    console.log(req.query.monedaOrigen);
    var transacciones = await Transaccion.find({ monedaOrigen: req.query.monedaOrigen, monedaDestino: req.query.monedaDestino});
    res.json(transacciones);
}

module.exports = transaccionCtrl;
