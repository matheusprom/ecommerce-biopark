import ProductRepository from '../infra/typeorm/repositories/ProductRepository';
import Product from '../infra/typeorm/entities/Product';

export default class FindProductService {
  public async execute(): Promise<Product[]> {
    const repository = new ProductRepository();
    
    return repository.get();
  }
}
