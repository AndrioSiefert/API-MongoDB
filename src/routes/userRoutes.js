import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/user", UserController.getUser);
routes.get("/user/search", UserController.searchFilter);
routes.get("/user/:id", UserController.getUserId);
routes.post("/user", UserController.createUser);
routes.put("/user/:id", UserController.uptadeUser);
routes.delete("/user/:id", UserController.deleteUser);

export default routes;
