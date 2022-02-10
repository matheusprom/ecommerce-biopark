import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePedidoProduto1643324454994 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pedido_produto',
                columns: [
                    {
                        name: 'pedido_id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'produto_id',
                        type: 'int',
                        isPrimary: true,
                    },
                ],
                foreignKeys: [
                    {
                        name: 'pedido',
                        referencedTableName: 'pedidos',
                        referencedColumnNames: ['id'],
                        columnNames: ['pedido_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: 'produto',
                        referencedTableName: 'produtos',
                        referencedColumnNames: ['id'],
                        columnNames: ['produto_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedido_produto');
    }
}
