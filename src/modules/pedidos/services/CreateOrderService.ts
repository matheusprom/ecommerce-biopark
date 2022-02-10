import Product from '../../products/infra/typeorm/entities/Product';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import IPedidoDTO from '../dtos/IPedidoDTO';
import Pedido from '../infra/typeorm/entities/Pedido';
import PedidoRepository from '../infra/typeorm/repositories/PedidoRepository';

export default class CreateOrderService {
    public async execute(
        data: IPedidoDTO
    ): Promise<Pedido | AppError | string[]> {
        const pedidoRepository = new PedidoRepository();

        for (let i = 0; i < data.produtos.length; i++) {
            if (
                !data.produtos[i].quantidade ||
                data.produtos[i].quantidade == 0
            ) {
                return new AppError(
                    'Deve ser informado a quantidade do produto para prosseguir com a compra'
                );
            }
        }

        if (data.produtos.length == 0) {
            return new AppError(
                'Necessário no minimo um produto para realizar a compra'
            );
        }

        const produtos = await pedidoRepository.verificaEstoque();
        const produtosEmFalta = [];

        for (let j = 0; j < data.produtos.length; j++) {
            const produtoCliente = data.produtos[j];

            for (let i = 0; i < produtos.length; i++) {
                const produto = produtos[i];

                if (produtoCliente.id == produto.id) {
                    if (produtoCliente.quantidade > produto.quantidade) {
                        produtosEmFalta[j] =
                            produto.nome +
                            ' está em falta ou você pediu uma quantidade a mais que tem no estoque. TOTAL EM ESTOQUE: ' +
                            produto.quantidade;
                    }
                }
                if (produtosEmFalta.length >= 1) {
                    return produtosEmFalta;
                }
            }
        }

        var valorTotal: number = 0;

        const repositoryProduct = getRepository(Product);

        for (let i = 0; i < data.produtos.length; i++) {
            const produtoCliente = data.produtos[i];

            valorTotal += produtoCliente.preco * produtoCliente.quantidade;

            const produto = await repositoryProduct.findOneOrFail(
                produtoCliente.id
            );

            produto.quantidade = produto.quantidade - produtoCliente.quantidade;

            repositoryProduct.save(produto);
        }

        data.valor = valorTotal - data.desconto;

        return await pedidoRepository.doOrder(data);
    }
}
