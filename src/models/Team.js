import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nameTeam: { type: mongoose.Schema.Types.String },
        country: { type: String },
    },
    { versionKey: false }
);

const team = mongoose.model("team", teamSchema);

export { team, teamSchema };
