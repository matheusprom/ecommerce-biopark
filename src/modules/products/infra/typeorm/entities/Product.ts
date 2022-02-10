import Category from '../../../../categories/infra/typeorm/entities/Category';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('produtos')
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    preco: number;

    @Column()
    quantidade: number;

    @Column()
    categoria_id: number;

    @ManyToOne(() => Category, (category) => category.produtos)
    @JoinColumn({ name: 'categoria_id' })
    categoria: Category;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
