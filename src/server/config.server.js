const express = require("express");
const morgan = require("morgan");
//require("./base-datos/config.db");
class Server {
  constructor(port) {
    this.port = process.env.PORT || port;
    this.app = express();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/productos", require("./routes/productos.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor prendido en el puerto", this.port);
    });
  }
}
module.exports = Server;
