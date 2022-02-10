import { Request, Response } from 'express';
import GetCategoryService from '../../../../categories/services/GetCategoryService';
import CreateCategoryService from '../../../../categories/services/CreateCategoryService';
import DeleteCategoryService from '../../../../categories/services/DeleteCategoryService';
import GetOneCategoryService from '../../../../categories/services/GetOneCategoryService';
import UpdateCategoryService from '../../../../categories/services/UpdateCategoryService';

class CategoriesController {
    async create(request: Request, response: Response) {
        const category = request.body;

        const createCategoryService = new CreateCategoryService();

        const result = await createCategoryService.execute(category);

        return response.json(result);
    }

    async get(request: Request, response: Response) {
        const getCategory = new GetCategoryService();

        const categories = await getCategory.execute();

        return response.json(categories);
    }

    async delete(request: Request, response: Response) {
        const id = Number(request.params.id);

        const deleteCategory = new DeleteCategoryService();

        const result = await deleteCategory.execute(id);

        return response.json(result);
    }

    async getOne(request: Request, response: Response) {
        const id = Number(request.params.id);

        const getOneCategory = new GetOneCategoryService();

        const category = await getOneCategory.execute(id);

        return response.json(category);
    }

    async update(request: Request, response: Response) {
        const id = Number(request.params.id);

        const data = request.body;

        const updateCategory = new UpdateCategoryService();

        const result = await updateCategory.execute(data, id);

        return response.json(result);
    }
}

export default new CategoriesController();
