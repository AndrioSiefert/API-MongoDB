import NotFound from "../error/notFound.js";
import { user } from "../models/index.js";

class UserController {
    static async getUser(req, res, next) {
        try {
            const listUser = await user.find({});
            res.status(200).json(listUser);
        } catch (error) {
            next(error);
        }
    }

    static async getUserId(req, res, next) {
        try {
            const id = req.params.id;
            const getId = await user.findById(id);

            if (getId !== null) {
                res.status(200).send(getId);
            } else {
                next(new NotFound());
            }
        } catch (error) {
            next(error);
        }
    }

    static async searchFilter(req, res, next) {
        try {
            const { nome, email } = req.query;

            const regex = new RegExp(nome, "i");

            const search = {};
            if (nome) search.nome = regex;
            if (email) search.email = email;

            const filter = await user.find(search);
            res.status(200).send(filter);
        } catch (error) {
            next(error);
        }
    }

    static createUser = async (req, res, next) => {
        try {
            let newUser = new user(req.body);
            const saveUser = await newUser.save();
            res.status(201).json(saveUser.toJSON());
        } catch (error) {
            next(error);
        }
    };

    static async uptadeUser(req, res, next) {
        try {
            const id = req.params.id;
            const uptadeID = await user.findByIdAndUpdate(id, req.body);

            if (uptadeID !== null) {
                res.status(200).json(uptadeID);
            } else {
                next(new NotFound());
            }
        } catch (error) {
            next(error);
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const id = req.params.id;
            const deleteId = await user.findByIdAndDelete(id);

            if (deleteId !== null) {
                res.status(200).send({ message: "Id deletado" });
            } else {
                next(new NotFound("Id não encontrado"));
            }
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
