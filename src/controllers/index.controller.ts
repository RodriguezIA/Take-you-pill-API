import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response): void {
        res.send('hello controller')
    }

}

export const indexController = new IndexController();