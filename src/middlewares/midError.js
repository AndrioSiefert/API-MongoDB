import mongoose from "mongoose";
import ErrorServidor from "../error/ErrorServidor.js";
import ErrorRequest from "../error/ErrorRequest.js";
import ErrorValidation from "../error/ErrorValidation.js";
import NotFound from "../error/notFound.js";

class ErrorHandler {
    // eslint-disable-next-line no-unused-vars
    static erro(error, req, res, next) {
        if (error instanceof mongoose.Error.CastError) {
            new ErrorRequest().sendResponse(res);
        } else if (error instanceof mongoose.Error.ValidationError) {
            new ErrorValidation(error).sendResponse(res);
        } else if (error instanceof NotFound) {
            error.sendResponse(res);
        } else {
            new ErrorServidor().sendResponse(res);
        }
        console.log(error);
    }
}

export default ErrorHandler;
