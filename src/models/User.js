import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: mongoose.Schema.Types.String },
        cpf: { type: mongoose.Schema.Types.String },
        email: { type: mongoose.Schema.Types.String },
        senha: { type: mongoose.Schema.Types.String },
    },
    { versionKey: false }
);

const user = mongoose.model("users", userSchema);

export default user;
