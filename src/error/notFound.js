import ErrorServidor from "./ErrorServidor.js";

class NotFound extends ErrorServidor {
    constructor(message = "ID não encontrado") {
        super(message, 404);
    }
}

export default NotFound;
