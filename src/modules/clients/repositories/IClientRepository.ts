import { DeleteResult, UpdateResult } from 'typeorm';
import IClientDTO from '../dtos/IClientDTO';
import Client from '../infra/typeorm/entities/Client';

/**
 * Interface que define quais serão os métodos do repositório de Clientes
 * Todos os métodos que o repositório terá devem ser primeiramente definidos aqui
 */
export default interface IClientRepository {
    /**
     * data são os dados do Cliente, deve ter o tipo IClientDTO
     * Promise<Client> é o tipo do retorno do método
     */
    create(data: IClientDTO): Promise<Client>;

    get(): Promise<Client[]>;

    findById(id: number): Promise<Client>;

    deleteClient(id: number): Promise<DeleteResult>;

    update(data: IClientDTO, id: number): Promise<UpdateResult>;
}
