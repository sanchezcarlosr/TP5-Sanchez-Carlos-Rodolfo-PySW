const Espectador = require('../models/Espectador');
const espectadorCtrl= {}

espectadorCtrl.getEspectadores = async (req, res) =>{
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.createEspectador = async (req, res) =>{
    var espectador = new Espectador(req.body);
    try{
        await espectador.save();
        res.status(200).json({
            'status':'1',
            'msg': 'Espectador registrado'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error al registrar el espectador'
        })
    }
}

espectadorCtrl.getEspectador = async (req, res) =>{
    const espectador = await Espectador.find({dni: req.query.dni});
    res.json(espectador);
}

module.exports= espectadorCtrl;