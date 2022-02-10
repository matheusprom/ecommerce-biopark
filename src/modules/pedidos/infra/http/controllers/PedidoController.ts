import { Request, Response } from 'express';
import FindOrderService from '../../../services/FindOrderService';
import CreateOrderService from '../../../services/CreateOrderService';
import FindClientOrderService from '../../../services/FindClientOrderService';

class PedidoController {
    async create(request: Request, response: Response) {
        const createOrder = new CreateOrderService();

        const data = request.body;

        const result = await createOrder.execute(data);

        return response.json(result);
    }

    async findOne(request: Request, response: Response) {
        const id = Number(request.body.id);

        const findService = new FindOrderService();

        const pedido = await findService.execute(id);

        return response.json(pedido);
    }

    async findClientOrder(request: Request, response: Response) {
        const id = Number(request.params.id);

        const clientOrderService = new FindClientOrderService();

        const pedidos = await clientOrderService.execute(id);

        return response.json(pedidos);
    }
}

export default new PedidoController();
