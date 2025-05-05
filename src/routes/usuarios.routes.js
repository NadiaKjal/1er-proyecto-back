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
router.post("/register", crearUsuario);
router.put("/:id", editarUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;
