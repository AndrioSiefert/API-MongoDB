import player from "../models/Player.js";

export default class PlayerController {
    static async getPlayers(req, res) {
        const index = await player.find({});
        res.status(200).json(index);
    }

    static async postPlayer(req, res) {
        try {
            const newPlayer = await player.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso!",
                player: newPlayer,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deletePlayer(req, res) {
        try {

        } catch (error) {

        }
    }
}
