import { Request, response, Response } from 'express';
import CreateClientService from '../../../services/CreateClientService';
import GetClientsServer from '../../../services/GetClientsService';
import GetClientServer from '../../../services/GetClientService';
import DeleteClientServer from '../../../services/DeleteClientServer';
import UpdateClientServer from '../../../services/UpdateClientServer';

/**
 * O controller tem acesso as requisições e é o responsável por enviar uma
 * resposta
 *
 * Por padrão ele deve ter no máximo 5 métodos (index, create, show, update e delete)
 */
class ClientsController {
    async create(request: Request, response: Response) {
        const data = request.body;

        const createClientService = new CreateClientService();

        const client = await createClientService.execute(data);

        return response.json(client);
    }

    async show(request: Request, response: Response) {
        const getClients = new GetClientsServer();

        const clients = await getClients.execute();

        return response.json(clients);
    }

    async showOne(request: Request, response: Response) {
        const id = Number(request.params.id);

        const getClient = new GetClientServer();

        const clients = await getClient.execute(id);

        return response.json(clients);
    }

    async delete(request: Request, response: Response) {
        const id = Number(request.params.id);

        const deleteClient = new DeleteClientServer();

        await deleteClient.execute(id);

        return response.json(deleteClient);
    }

    async update(request: Request, response: Response) {
        const data = request.body;

        const id = Number(request.body.id);

        const updateClient = new UpdateClientServer();

        const client = await updateClient.execute(data, id);

        return response.json(client);
    }
}

export default new ClientsController();
