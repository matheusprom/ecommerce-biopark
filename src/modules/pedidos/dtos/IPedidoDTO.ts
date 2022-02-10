import Product from '../../products/infra/typeorm/entities/Product';

export default class IPedidoDTO {
    id?: number;
    cliente_id?: number;
    data: string;
    status: string;
    produtos: Product[];
    forma_pagamento: string;
    valor?: number;
    desconto: number;
}
