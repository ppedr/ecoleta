import express from 'express';
import PointsControler from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsControler();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);

export default routes;

// index - to list, show, create(store), update, delete(destroy)