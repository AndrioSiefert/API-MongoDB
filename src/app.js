import express from "express";
import connect from "./config/db.js";
import mongoose from "mongoose";
import player from "./models/Player.js";

const connection = await connect();

mongoose.connection.on("error", (error) => {
    console.error("Erro de Conexão com MongoDB", error);
});
mongoose.connection.once("open", () => {
    console.log("Conexão MongoDB on");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Server On");
});

export default app;
