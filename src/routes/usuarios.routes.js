const { Router } = require("espress");
const {
  obtenerTodosLosUsuarios,
  obtenerUnUsuario,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios.controllers");
const router = Router();

router.get("/", obtenerTodosLosUsuarios);
router.get("/:id", obtenerUnUsuario);
router.post("/", crearUsuario);
router.put("/", editarUsuario);
router.delete("/", eliminarUsuario);

module.exports = router;
