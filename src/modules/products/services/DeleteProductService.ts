import ProductRepository from '../../products/infra/typeorm/repositories/ProductRepository';
import AppError from '../../../shared/errors/AppError';
import { DeleteResult } from 'typeorm';

export default class DeleteProductService {
  public async execute(id: number): Promise<DeleteResult | AppError> {
    if (!id) {
      return new AppError('Necessário ID do produto para deleta-lo');
    }

    const repository = new ProductRepository();

    return repository.delete(id);
  }
}
