const argon = require("argon2");
const UsuariosModel = require("../models/usuarios.models");

const obtenerTodosLosUsuariosBD = async () => {
  try {
    const usuarios = await UsuariosModel.find();
    return {
      usuarios,
      statusCode: 200,
    };
  } catch (error) {
    return {
      error,
      statusCode: 500,
    };
  }
};

const obtenerUnUsuarioBD = async (idUsuario) => {
  try {
    const usuario = await UsuariosModel.findById(idUsuario);
    return {
      usuario,
      statusCode: 200,
    };
  } catch (error) {
    return {
      error,
      statusCode: 500,
    };
  }
};

const crearUsuarioBD = async (body) => {
  try {
    const usuarioExiste = await UsuariosModel.findOne({
      nombreUsuario: body.nombreUsuario,
    });

    if (usuarioExiste) {
      return {
        msg: "Usuario no disponible",
        statusCode: 409,
      };
    }

    const nuevoUsuario = new UsuariosModel(body);
    nuevoUsuario.contrasenia = argon.hash(nuevoUsuario.contrasenia);
    await nuevoUsuario.save();
    return {
      msg: "Usuario creado con exito.",
      statusCode: 201,
    };
  } catch (error) {
    return {
      error,
      statusCode: 500,
    };
  }
};

const editarUsuarioBD = async (idUsuario, nuevoBody) => {
  try {
    await UsuariosModel.findByIdAndUpdate({ _id: idUsuario }, nuevoBody);

    return {
      msg: "Usuario Editado",
      StatusCode: 200,
    };
  } catch (error) {
    return {
      error,
      statusCode: 500,
    };
  }
};

const eliminarUsuarioBD = async (idUsuario) => {
  try {
    await UsuariosModel.findByIdAndDelete(idUsuario);
    return {
      msg: "Usuario Eliminado.",
      statusCode: 200,
    };
  } catch (error) {
    return {
      error,
      statusCode: 500,
    };
  }
};

module.exports = {
  obtenerTodosLosUsuariosBD,
  obtenerUnUsuarioBD,
  crearUsuarioBD,
  editarUsuarioBD,
  eliminarUsuarioBD,
};
