import { Request, Response } from "express";

import pool from "../database";

class UsersController {

    public async listUsers(req: Request, res: Response): Promise<void> {
        const users = await pool.query("SELECT * FROM users");
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users where id = ?", [id]);

        if (user.length > 0) {
            res.json(user[0]);
        };
        res.status(400).json({ text: "User dont exist" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const user = await pool.query("INSERT INTO users set ?", [req.body]);
        res.json({ text: `User created in ${new Date}` });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("UPDATE users SET ? WHERE id = ?", [req.body, id]);
        res.json({ text: `User was updated` });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("DELETE FROM users WHERE id = ?", [id]);
        res.json({ text: `User was deleted` });
    }

}

export const usersController = new UsersController();
export default usersController;