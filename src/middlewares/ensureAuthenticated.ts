import { NextFunction, request, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { AppError } from "../errors/AppError"
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository"

interface IPayload {
  sub: string
}


export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, "8016a5929e83b38a54fe4e380f52b4dc") as IPayload

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User does not exists!", 401)
    }

    request.user = {
      id: user_id
    }

    next()
  } catch (e) {
    throw new AppError("Invalid token!", 401)
  }
}
