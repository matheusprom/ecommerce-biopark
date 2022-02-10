import IClientDTO from 'modules/clients/dtos/IClientDTO';
import IClientRepository from 'modules/clients/repositories/IClientRepository';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import Client from '../entities/Client';

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientREpository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class ClientRepository implements IClientRepository {
    private ormRepository: Repository<Client>;

    constructor() {
        this.ormRepository = getRepository(Client);
    }

    async update(data: IClientDTO, id: number): Promise<UpdateResult> {
        const client = await this.ormRepository.update(id, data);

        return client;
    }

    async deleteClient(id: number): Promise<DeleteResult> {
        return this.ormRepository.delete(id);
    }

    async findById(id: number): Promise<Client> {
        const client = this.ormRepository.findOneOrFail(id);

        return client;
    }

    async get(): Promise<Client[]> {
        const clients = this.ormRepository.find();
        return clients;
    }

    async create(data: IClientDTO): Promise<Client> {
        const client = this.ormRepository.create(data);

        return this.ormRepository.save(client);
    }
}
