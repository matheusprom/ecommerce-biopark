import AppError from '../../../shared/errors/AppError';
import Client from '../infra/typeorm/entities/Client';
import ClientRepository from '../infra/typeorm/repositories/ClientRepository';

export default class GetClientService {
    public async execute(id: number): Promise<Client | AppError> {
        if (!id) {
            return new AppError('Necessário ID para encontrar o cliente');
        }

        const clientRepository = new ClientRepository();

        const client = await clientRepository.findById(id);

        return client;
    }
}
