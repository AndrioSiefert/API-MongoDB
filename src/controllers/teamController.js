import { team } from "../models/Team.js";

class TeamController {
    static async getTeam(req, res) {
        try {
            const listTeam = await team.find({});
            res.status(200).json(listTeam);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getID(req, res) {
        try {
            const id = req.params.id;
            const teamID = await team.findById(id);
            res.status(200).json(teamID);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async postTeam(req, res) {
        try {
            const newTeam = await team.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso!",
                player: newTeam,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async updateTeam(req, res) {
        try {
            const id = req.params.id;
            await team.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Update sucess" });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async deleteTeam(req, res) {
        try {
            const id = req.params.id;
            await team.findByIdAndDelete(id);
            res.status(200).json({ message: "Team Deleted" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default TeamController;
