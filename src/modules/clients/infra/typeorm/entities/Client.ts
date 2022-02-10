import Pedido from '../../../../pedidos/infra/typeorm/entities/Pedido';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clientes')
export default class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @OneToMany(() => Pedido, (Pedido) => Pedido.cliente)
  pedidos: Pedido[];

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
