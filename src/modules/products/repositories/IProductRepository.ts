import { UpdateResult, DeleteResult } from 'typeorm';
import IProductDTO from '../dtos/IProductDTO';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  create(data: IProductDTO): Promise<Product>;

  get(): Promise<Product[]>;

  findOne(id: number, data: IProductDTO): Promise<Product | undefined>;

  delete(id: number): Promise<DeleteResult>;

  update(data: IProductDTO, id: number): Promise<Product>; 
}
