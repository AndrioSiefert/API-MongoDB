import ErrorServidor from "./ErrorServidor.js";

class ErrorRequest extends ErrorServidor {
    constructor(message = "Um ou mais dados fornecidos estão incorretor") {
        super(message, 400);
    }
}

export default ErrorRequest;
