import { inject, injectable } from "tsyringe"
import { hash } from "bcrypt"
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { AppError } from "../../../../errors/AppError"

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8)

    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError("User already exists", 400)
    }

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    })
  }
}
