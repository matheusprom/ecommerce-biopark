import { Router } from 'express';
import clientsRoutes from '../../../../modules/clients/infra/http/routes/clients.routes';
import categoriesRoutes from '../../../../modules/categories/infra/http/routes/categories.routes';
import productRoutes from '../../../../modules/products/infra/http/routes/products.routes';
import pedidoRoutes from '../../../../modules/pedidos/infra/http/routes/pedido.routes';

const routes = Router();

routes.use('/clientes', clientsRoutes);

routes.use('/categoria', categoriesRoutes);

routes.use('/produtos', productRoutes);

routes.use('/pedido', pedidoRoutes);

export default routes;
