import express from "express";
import PlayerController from "./controllers/playerController.js";

const routes = express.Router();

routes.get("/player", PlayerController.getPlayers);
