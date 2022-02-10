import { UpdateResult } from 'typeorm';
import IClientDTO from '../dtos/IClientDTO';
import ClientRepository from '../infra/typeorm/repositories/ClientRepository';
import AppError from '../../../shared/errors/AppError';

export default class UpdateClientsService {
    public async execute(
        data: IClientDTO,
        id: number
    ): Promise<UpdateResult | AppError> {
        const clientRepository = new ClientRepository();

        if (!data.id) {
            return new AppError('Precisa do ID do cliente para atualizar');
        }

        const client = await clientRepository.update(data, id);

        return client;
    }
}
