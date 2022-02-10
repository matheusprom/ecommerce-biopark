import { UpdateResult, DeleteResult } from 'typeorm';
import ICategoryDTO from '../dtos/ICategoryDTO';
import Category from '../infra/typeorm/entities/Category';

export default interface IcategoryRepository {
    create(data: ICategoryDTO): Promise<Category>;

    get(): Promise<Category[]>;

    findOne(id: number): Promise<Category | undefined>;

    delete(id: number): Promise<DeleteResult>;

    update(data: ICategoryDTO, id: number): Promise<UpdateResult>;
}
