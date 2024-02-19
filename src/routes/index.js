import express from "express";
import players from "./playerRoutes.js";
import team from "./teamRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Servidor"));

    app.use(express.json(), players, team);
};

export default routes;
