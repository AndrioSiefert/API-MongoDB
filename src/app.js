import express from "express";
import connect from "./config/db.js";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import ErrorHandler from "./middlewares/midError.js";
import mid404 from "./middlewares/mid404.js";

// eslint-disable-next-line no-unused-vars
const connection = await connect();

mongoose.connection.on("error", (error) => {
    console.error("Erro de Conexão com MongoDB", error);
});
mongoose.connection.once("open", () => {
    console.log("Conexão MongoDB on");
});

const app = express();
app.use(express.json());
routes(app);
app.use(mid404);
// eslint-disable-next-line no-unused-vars
app.use(ErrorHandler.erro);

export default app;
