import NotFound from "../error/notFound.js";
import { product } from "../models/index.js";

class ProductController {
    static async getProduct(req, res, next) {
        try {
            const { quantidade = 10, pagina = 1 } = req.query;
            const list = await product
                .find()
                // informa a quantidade de documentos que devem ser pulados em uma pagina
                .skip((pagina - 1) * quantidade)
                .limit(quantidade);
            res.status(200).json(list);
        } catch (error) {
            next(error);
        }
    }

    static async getID(req, res, next) {
        try {
            const id = req.params.id;
            const productId = await product.findById(id);
            if (productId !== null) {
                res.status(200).json(productId);
            } else {
                next(new NotFound());
            }
        } catch (error) {
            next(error);
        }
    }

    static createProduct = async (req, res, next) => {
        try {
            const newProduct = await product.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso!",
                product: newProduct,
            });
        } catch (error) {
            next(error);
        }
    };

    static async updateProduct(req, res) {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Update sucess" });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200).json({ message: "Team Deleted" });
        } catch (error) {
            next(error);
        }
    }
}

export default ProductController;
