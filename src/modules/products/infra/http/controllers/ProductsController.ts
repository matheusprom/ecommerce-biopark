import { Request, Response } from 'express';
import FindProductService from '../../../services/FindProductsService';
import CreateProductService from '../../../services/CreateProductServeice';
import FindOneProductService from '../../../services/FindOneProductService';
import DeleteProductService from '../../../services/DeleteProductService';
import UpdateProductService from '../../../services/UpdateProductService';

class ProductController {
  async create(request: Request, response: Response) {
    const create = new CreateProductService();

    const product = request.body;

    return response.json(await create.execute(product));
  }

  async find(request: Request, response: Response) {
    const find = new FindProductService();

    return response.json(await find.execute());
  }

  async findOne(request: Request, response: Response) {
    const findOne = new FindOneProductService();

    const data = request.body;

    const id = Number(request.body.id);

    return response.json(await findOne.execute(data, id));
  }

  async delete(request: Request, response: Response) {
    const deleteService = new DeleteProductService();

    const id = Number(request.body.id);

    return response.json(await deleteService.execute(id));
  }

  async update(request: Request, response: Response) {
    const update = new UpdateProductService();

    const data = request.body;

    const id = Number(request.body.id);

    return response.json(await update.execute(id, data));
  }
}

export default new ProductController();
