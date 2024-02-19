import mongoose from "mongoose";
import { teamSchema } from "./Team.js";

const playerSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: mongoose.Schema.Types.String, required: true },
        numCamisa: {
            type: mongoose.Schema.Types.Number,
            required: [true, "Número da camisa é obrigatório"],
        },
        posi: { type: String },
        team: teamSchema,
    },
    { versionKey: false }
);

const player = mongoose.model("players", playerSchema);

export default player;
