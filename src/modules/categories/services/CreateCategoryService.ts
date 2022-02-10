import ICategoryDTO from '../dtos/ICategoryDTO';
import Category from '../infra/typeorm/entities/Category';
import CategoryRepository from '../infra/typeorm/repositories/CategoryRepository';
import AppError from '../../../shared/errors/AppError';

export default class CreateCategoryService {
    public async execute(data: ICategoryDTO): Promise<Category | AppError> {
        if (!data) {
            return new AppError(
                'Necessario descrição para o cadastro da categoria'
            );
        }

        const categoryRepository = new CategoryRepository();

        const category = categoryRepository.create(data);

        return category;
    }
}
