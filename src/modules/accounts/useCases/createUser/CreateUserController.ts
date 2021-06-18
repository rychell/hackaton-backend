import { Request, Response } from "express";

import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      isDonator,
      AddressNumber,
      AddressState,
      bloodType,
      phoneNumber,
    } = request.body;
    const usersRepository = new UsersRepositoryInMemory();
    const createUserUseCase = new CreateUserUseCase(usersRepository);
    const createdUser = createUserUseCase.execute({
      name,
      email,
      password,
      isDonator,
      AddressNumber,
      AddressState,
      bloodType,
      phoneNumber,
    });

    return response.status(201).json(createdUser);
  }
}

export { CreateUserController };
