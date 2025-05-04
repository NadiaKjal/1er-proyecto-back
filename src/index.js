const Server = require("./server/config.server");
const server = new Server(3001);
server.listen();
