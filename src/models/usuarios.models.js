const [Schema, model] = require("mongoose");

const UsuarioSchema = new Schema({});

const UsuariosModel = model("usuarios", UsuarioSchema);
module.exports = UsuariosModel;
