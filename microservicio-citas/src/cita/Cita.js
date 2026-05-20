var mongoose = require('mongoose');

// Campos exactos que pide el PDF
var CitaSchema = new mongoose.Schema({
    medico_id: { type: Number, required: true },
    paciente_id: { type: Number, required: true },
    fecha_cita: { type: String, required: true },
    hora_cita: { type: String, required: true },
    estado: { type: String, default: 'programada' },
    observaciones: { type: String },
    costo: { type: Number, required: true }
});

mongoose.model('Cita', CitaSchema);
module.exports = mongoose.model('Cita');