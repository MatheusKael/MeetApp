import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Matheus kael',
    email: 'matheuskael.silva@gmail.com',
    password_hash: '1e1edadasdda',
    provider: false,
  });
  return res.json(user);
});

export default routes;
