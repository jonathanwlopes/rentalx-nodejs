import { container } from "tsyringe"
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository"
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository"

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)

// ISpecificationsRepository
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationsRepository)
