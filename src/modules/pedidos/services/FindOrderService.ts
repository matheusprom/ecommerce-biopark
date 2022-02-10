import Pedido from '../infra/typeorm/entities/Pedido';
import AppError from '../../../shared/errors/AppError';
import PedidoRepository from '../infra/typeorm/repositories/PedidoRepository';

export default class FindOrderService {
    public async execute(id: number): Promise<Pedido | AppError | undefined> {

        if (!id) {
            return new AppError(
                'Necessário ID para encontrar os pedidos dos clientes'
            );
        }

        const repository = new PedidoRepository();

        const pedido = await repository.findOne(id);

        return pedido;
    }
}
