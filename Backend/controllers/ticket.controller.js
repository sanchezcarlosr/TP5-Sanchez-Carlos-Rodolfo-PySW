const Ticket = require('../models/Ticket');
const ticketCtrl= {}

ticketCtrl.getTickets = async (req, res) =>{
    /**
     * populate es un metodo que utiliza la refencia que se creo al principio espectador esta definido como una referencia en Ticket
     * vasicamente rellena los datos del espectador en vez de hacerlo manual, en el lugar donde especificamos en este caso al llegar al tipo
     * espectador en vez de mostrar su ID, lo rellenara con los datos del espectador
     */
    const tickets = await Ticket.find({}).populate('espectador');
    res.json(tickets);
}

ticketCtrl.getTicket = async (req, res) =>{
    
    const tickets = await Ticket.find({_id: req.query.id}).populate('espectador');
    res.json(tickets);
}
ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try{
        await ticket.save();
        res.status(200).json({
            'status':'1',
            'msg': 'Ticket registrado'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg':'Ticket no registrado'
        })
    }
}

ticketCtrl.deleteTicket = async (req, res) =>{
    try{
        await Ticket.deleteOne({_id: req.query.id});
        res.status(200).json({
            'status':'1',
            'msg': 'Ticket eliminado'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error en la eliminacion'
        })
    }
}

ticketCtrl.editTicket = async (req, res) =>{
    const ticket = new Ticket(req.body);
    try{
        await Ticket.updateOne({_id: req.query.id}, ticket);
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket modificado'
        })
    }catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error en la edicion'
        })
    }
}

ticketCtrl.getTicketsPorEspectador = async (req, res)=> {
    const tickets = await Ticket.find({categoriaEspectador: req.query.categoriaEspectador}).populate('espectador');
    res.json(tickets);
}

module.exports = ticketCtrl;