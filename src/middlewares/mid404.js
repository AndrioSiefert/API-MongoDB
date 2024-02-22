import NotFound from "../error/notFound.js";

function mid404(req, res, next) {
    const error404 = new NotFound();
    next(error404);
}

export default mid404;
