// eslint-disable-next-line no-unused-vars
function mid404(req, res, next) {
    res.status(404).send({ message: "Página não encontrada" });
}

export default mid404;
