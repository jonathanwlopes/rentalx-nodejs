import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase)

    const categoryList = await listCategoryUseCase.execute()

    return response.status(200).send(categoryList)
  }
}
