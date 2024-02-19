import express from "express";
import TeamController from "../controllers/teamController.js";

const routes = express.Router();

routes.get("/team", TeamController.getTeam);
routes.get("/team/:id", TeamController.getID);
routes.post("/team", TeamController.postTeam);
routes.put("/team/:id", TeamController.updateTeam);
routes.delete("/team/:id", TeamController.deleteTeam);

export default routes;
