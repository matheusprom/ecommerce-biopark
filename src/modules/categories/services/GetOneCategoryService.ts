import Category from '../infra/typeorm/entities/Category';
import CategoryRepository from '../infra/typeorm/repositories/CategoryRepository';
import AppError from '../../../shared/errors/AppError';

export default class GetOneCategoryService {
    public async execute(id: number): Promise<Category | AppError | undefined> {
        if (!id) {
            return new AppError('Necessário ID para encontrar a categoria');
        }

        const categoryRepository = new CategoryRepository();

        const category = await categoryRepository.findOne(id);

        return category;
    }
}
