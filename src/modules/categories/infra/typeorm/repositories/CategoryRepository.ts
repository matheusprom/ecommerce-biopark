import ICategoryDTO from '../../../dtos/ICategoryDTO';
import IcategoryRepository from 'modules/categories/repositories/ICategoryRepository';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import Category from '../entities/Category';

export default class CategoryRepository implements IcategoryRepository {
    private ormRepository: Repository<Category>;

    constructor() {
        this.ormRepository = getRepository(Category);
    }

    async create(data: ICategoryDTO): Promise<Category> {
        const category = this.ormRepository.create(data);

        return this.ormRepository.save(category);
    }

    async get(): Promise<Category[]> {
        const category = await this.ormRepository.find({
            relations: ['produtos']
        });

        return category;
    }
    async findOne(id: number): Promise<Category | undefined> {
        //const category = this.ormRepository.findOneOrFail(id);

        const category = this.ormRepository.findOne(id, {
            relations: ['produtos'],
        });

        return category;
    }
    async delete(id: number): Promise<DeleteResult> {
        const result = this.ormRepository.delete(id);

        return result;
    }
    async update(data: ICategoryDTO, id: number): Promise<UpdateResult> {
        const result = this.ormRepository.update(id, data);

        return result;
    }
}
