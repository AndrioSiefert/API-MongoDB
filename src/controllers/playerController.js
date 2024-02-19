import player from "../models/Player.js";
import { team } from "../models/Team.js";

class PlayerController {
    static async getPlayers(req, res, next) {
        try {
            const listPlayer = await player.find({});
            res.status(200).json(listPlayer);
        } catch (error) {
            next(error);
        }
    }

    static async getPlayerId(req, res, next) {
        try {
            const id = req.params.id;
            const getId = await player.findById(id);

            if (getId !== null) {
                res.status(200).send(getId);
            } else {
                res.status(404).send({
                    message: "ID não encontrado",
                });
            }
        } catch (error) {
            next(error);
        }
    }

    static async getPlayerPosition(req, res, next) {
        const search = req.query.posi;
        try {
            const searchPosition = await player.find({ posi: search });
            res.status(200).json(searchPosition);
        } catch (error) {
            next(error);
        }
    }

    static postPlayer = async (req, res, next) => {
        const playerBody = req.body;
        try {
            const getTeam = await team.findById(playerBody.team);
            const newPlayer = { ...playerBody, team: { ...getTeam._doc } };
            const createPlayer = await player.create(newPlayer);
            res.status(201).json({
                message: "Criado com sucesso!",
                player: createPlayer,
            });
        } catch (error) {
            next(error);
        }
    };

    static async uptadePlayer(req, res, next) {
        try {
            const id = req.params.id;
            await player.findByIdAndUpdate(id, req.body);
            res.status(200).json();
        } catch (error) {
            next(error);
        }
    }

    static async deletePlayer(req, res, next) {
        try {
            const id = req.params.id;
            await player.findByIdAndDelete(id);
            res.status(200).json({ message: "Player Deleted" });
        } catch (error) {
            next(error);
        }
    }
}

export default PlayerController;
