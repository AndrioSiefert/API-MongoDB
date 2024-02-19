import ErrorRequest from "./ErrorRequest.js";

class ErrorValidation extends ErrorRequest {
    constructor(error) {
        const messageError = Object.values(error.errors)
            .map((erro) => erro.message)
            .join("; ");
        super(`Erros encontrados: ${messageError}`);
    }
}

export default ErrorValidation;
