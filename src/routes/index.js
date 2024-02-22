import express from "express";
import user from "./userRoutes.js";
import product from "./productRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Servidor"));

    app.use(express.json(), user, product);
};

export default routes;
