import { Router } from 'express';
import CategoriesController from '../controllers/CategoriesController';

const routes = Router();

routes.post('/', CategoriesController.create);

routes.get('/', CategoriesController.get);

routes.delete('/:id', CategoriesController.delete);

routes.get('/:id', CategoriesController.getOne);

routes.put('/:id', CategoriesController.update);

export default routes;
