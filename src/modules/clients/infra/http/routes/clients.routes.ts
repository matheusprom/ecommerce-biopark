import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';

const routes = Router();

routes.post('/', ClientsController.create);

routes.get('/', ClientsController.show);

routes.get('/:id', ClientsController.showOne);

routes.delete('/:id', ClientsController.delete);

routes.put('/', ClientsController.update);

export default routes;
