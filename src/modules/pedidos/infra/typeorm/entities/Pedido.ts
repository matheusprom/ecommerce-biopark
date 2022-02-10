import Client from '../../../../clients/infra/typeorm/entities/Client';

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Product from '../../../../products/infra/typeorm/entities/Product';

@Entity('pedidos')
export default class Pedido {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cliente_id: number;

    @ManyToOne(() => Client, (client) => client.pedidos)
    @JoinColumn({ name: 'cliente_id' })
    cliente: Client;

    @ManyToMany(() => Product)
    @JoinTable({
        name: 'pedido_produto',
        joinColumn: {
            name: 'pedido_id',
        },
        inverseJoinColumn: {
            name: 'produto_id',
        },
    })
    produtos: Product[];

    @Column()
    data: string;

    @Column()
    status: string;

    @Column()
    forma_pagamento: string;

    @Column()
    valor: number;

    @Column()
    desconto: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
