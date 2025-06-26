import { Router } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';
import FraseController from './controllers/FraseController';
import authMiddleware from './middleware/auth';

const routes = Router();

// Auth
routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);

// Usuário
routes.get('/users', UserController.list); // opcional, só pra teste

// Frases (protegido)
routes.use(authMiddleware);
routes.post('/frases', FraseController.create);
routes.delete('/frases/:id', FraseController.remove);

export default routes;
