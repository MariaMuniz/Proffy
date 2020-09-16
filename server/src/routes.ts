
import express from 'express';
import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);
routes.post('/connection', connectionsController.create);
routes.get('/connection', connectionsController.index);
export default routes;