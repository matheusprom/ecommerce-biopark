import { Router } from 'express';
import PedidoController from '../controllers/PedidoController';

const routes = Router();

routes.post('/', PedidoController.create);

routes.get('/', PedidoController.findOne);

routes.get('/:id', PedidoController.findClientOrder);

export default routes;
