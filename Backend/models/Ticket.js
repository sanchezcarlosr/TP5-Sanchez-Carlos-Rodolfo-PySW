const mongoose = require('mongoose');
const {Schema} = mongoose;
const TicketSchema = Schema({
    precioTicket: {type: Number, required: true},
    categoriaEspectador: {type: String, required: true},
    fechaCompra: {type:String, required: true}, // gestinar fecha como string
    espectador: {type:Schema.Types.ObjectId, ref:'Espectador'}

})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);