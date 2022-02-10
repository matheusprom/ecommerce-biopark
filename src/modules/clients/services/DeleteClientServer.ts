import { DeleteResult } from 'typeorm';
import ClientRepository from '../infra/typeorm/repositories/ClientRepository';
import AppError from '../../../shared/errors/AppError';

export default class DeleteClientService {
    public async execute(id: number): Promise<DeleteResult | AppError> {
        if (!id) {
            return new AppError('Precisa do ID do cliente para remove-lo');
        }

        const clientRepository = new ClientRepository();

        const resutl = await clientRepository.deleteClient(id);

        return resutl;
    }
}
