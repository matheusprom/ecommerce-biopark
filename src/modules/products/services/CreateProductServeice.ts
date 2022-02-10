import ProductRepository from '../infra/typeorm/repositories/ProductRepository';
import Product from '../infra/typeorm/entities/Product';
import IProductDTO from '../dtos/IProductDTO';
import AppError from '../../../shared/errors/AppError';

export default class CreateProductService {
  public async execute(data: IProductDTO): Promise<Product | AppError> {
    if (!data) {
      return new AppError('Necessário dados para fazer o cadastro');
    }

    if (!data.categoria_id) {
      return new AppError(
        'Necessário informar a qual categoria o produto petence para cadastra-lo'
      );
    }

    const repository = new ProductRepository();

    const productCreated = await repository.create(data);

    return productCreated;
  }
}
