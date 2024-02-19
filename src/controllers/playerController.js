import player from "../models/Player.js";
import { team } from "../models/Team.js";

class PlayerController {
    static async getPlayers(req, res) {
        try {
            const listPlayer = await player.find({});
            res.status(200).json(listPlayer);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getPlayerId(req, res) {
        try {
            const id = req.params.id;
            const getId = await findById(id);
            res.status(200).json(getId);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async postPlayer(req, res) {
        const playerBody = req.body;
        try {
            const getTeam = await team.findById(playerBody.team);
            const newPlayer = { ...playerBody, team: { ...getTeam._doc } };
            const createPlayer = await player.create(newPlayer);
            res.status(201).json({
                message: "Criado com sucesso!",
                player: newPlayer,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async uptadePlayer(req, res) {
        try {
            const id = req.params.id;
            await player.findByIdAndUpdate(id, req.body);
            res.status(200).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deletePlayer(req, res) {
        try {
            const id = req.params.id;
            await player.findByIdAndDelete(id);
            res.status(200).json({ message: "Player Deleted" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default PlayerController;
