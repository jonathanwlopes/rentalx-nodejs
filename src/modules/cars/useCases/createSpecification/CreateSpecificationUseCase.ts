import { inject, injectable } from "tsyringe"
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository"

interface IRequest {
  name: string
  description: string
}
@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)
    if (specificationAlreadyExists) throw new Error("Specification already exists!")

    this.specificationRepository.create({ name, description })
  }
}
