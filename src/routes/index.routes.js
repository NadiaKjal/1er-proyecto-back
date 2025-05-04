const { Router } = require("espress");
const router = Router();

const usuariosRutas = require("./usuarios.routes.js");

router.use("/usuarios", usuariosRutas);

module.exports = router;
