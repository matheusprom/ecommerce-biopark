import Client from '../infra/typeorm/entities/Client';
import ClientRepository from '../infra/typeorm/repositories/ClientRepository';

/**
 * O service terá toda a regra de negócio. Cada service é responsável por
 * uma única atividade.
 *
 * Por Exemplo: Esse service é o responsável por cadastrar um usuário.
 * Todas as operações/regras/verificações que precisam ser feitas para que
 * o usuário seja cadastrado devem ser feitas aqui
 *
 * Como um service só tem uma função ele deve ter apenas um método público
 */
export default class GetClientsService {
    public async execute(): Promise<Client[]> {
        const clientRepository = new ClientRepository();

        const client = await clientRepository.get();

        return client;
    }
}
