import express from "express";
import TeamController from "../controllers/teamController.js";

const routes = express.Router();

routes.get("/team", TeamController.getTeam);
routes.get("/team", TeamController.getID);
routes.post("/team", TeamController.postTeam);
routes.put("/team", TeamController.updateTeam);
routes.delete("/team", TeamController.deleteTeam);

export default routes;
