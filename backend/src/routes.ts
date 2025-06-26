import { Router } from 'express';
import AuthController   from './controllers/AuthController';
import UserController   from './controllers/UserController';
import FraseController  from './controllers/FraseController';
import authMiddleware  from './middleware/auth';

const routes = Router();

/* ----------  ROTAS PÚBLICAS  ---------- */
routes.post('/register', AuthController.register);
routes.post('/login',    AuthController.login);

/* ----------  ROTAS DE TESTE (opcional)  ---------- */
routes.get('/users', UserController.list);

/* ----------  ROTAS PROTEGIDAS  ---------- */
routes.use(authMiddleware);

routes.get   ('/frases',       FraseController.list);
routes.post  ('/frases',       FraseController.create);
routes.delete('/frases/:id',   FraseController.remove);

export default routes;
