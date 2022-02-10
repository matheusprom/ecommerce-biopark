import ProductRepository from '../infra/typeorm/repositories/ProductRepository';
import Product from '../infra/typeorm/entities/Product';
import IProductDTO from '../dtos/IProductDTO';
import AppError from '../../../shared/errors/AppError';

export default class FindOneProductService {
  public async execute(
    data: IProductDTO,
    id: number
  ): Promise<Product | AppError | undefined> {
    if (!id) {
      return new AppError('Necessário id do produto para encontra-lo');
    }

    const repository = new ProductRepository();

    return repository.findOne(id, data);
  }
}
