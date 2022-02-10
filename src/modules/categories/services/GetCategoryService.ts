import Category from '../infra/typeorm/entities/Category';
import CategoryRepository from '../infra/typeorm/repositories/CategoryRepository';

export default class GetCategoryService {
    public async execute(): Promise<Category[]> {
        const categoryRepository = new CategoryRepository();

        const category = categoryRepository.get();

        return category;
    }
}
