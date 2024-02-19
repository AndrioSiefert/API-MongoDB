import express from "express";
import connect from "./config/db.js";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const connection = await connect();

mongoose.connection.on("error", (error) => {
    console.error("Erro de Conexão com MongoDB", error);
});
mongoose.connection.once("open", () => {
    console.log("Conexão MongoDB on");
});

const app = express();
routes(app);

export default app;
