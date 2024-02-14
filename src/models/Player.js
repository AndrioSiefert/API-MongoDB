import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: mongoose.Schema.Types.String, required: true },
        numCamisa: { type: Number },
        posi: { type: String },
    },
    { versionKey: false }
);

const player = mongoose.model("players", playerSchema);

export default player;
