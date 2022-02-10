import ProductRepository from '../../products/infra/typeorm/repositories/ProductRepository';
import AppError from '../../../shared/errors/AppError';
import IProductDTO from '../dtos/IProductDTO';
import Product from '../infra/typeorm/entities/Product';

export default class UpdateProductService {
  public async execute(
    id: number,
    data: IProductDTO
  ): Promise<Product | AppError> {
    if (!id) {
      return new AppError('Necessário ID do produto para atualiza-lo');
    }

    const repository = new ProductRepository();

    return repository.update(data, id);
  }
}
