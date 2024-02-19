import express from "express";
import PlayerController from "../controllers/playerController.js";

const routes = express.Router();

routes.get("/players", PlayerController.getPlayers);
routes.get("/players/:id", PlayerController.getPlayerId);
routes.post("/players", PlayerController.postPlayer);
routes.put("/players/:id", PlayerController.uptadePlayer);
routes.delete("/players/:id", PlayerController.deletePlayer);

export default routes;
