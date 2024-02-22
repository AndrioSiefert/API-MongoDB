import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: mongoose.Schema.Types.String },
        descricao: { type: mongoose.Schema.Types.String },
        preco: { type: mongoose.Schema.Types.Number },
        quantidade: { type: mongoose.Schema.Types.Number },
        imagem: { type: mongoose.Schema.Types.String },
        categoria: { type: mongoose.Schema.Types.String },
        dataCriacao: { type: mongoose.Schema.Types.Date },
        dataAtualizacao: { type: mongoose.Schema.Types.Date },
    },
    { versionKey: false }
);

const product = mongoose.model("products", productSchema);

export default product;
