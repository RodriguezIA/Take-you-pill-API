import { Router } from 'express';

import usersController from '../controllers/users.controller';

class UsersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => {
            res.json({ message: 'list of users' })
        });
        this.router.get('/:id',)
        this.router.post('/', usersController.create);
        this.router.put('/:id',);
        this.router.delete('/:id',);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;

