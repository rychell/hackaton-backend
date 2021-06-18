import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({
    name,
    email,
    password,
    isDonator,
    AddressNumber,
    AddressState,
    bloodType,
    phoneNumber,
  }: ICreateUserDTO): User {
    const user = this.usersRepository.save({
      name,
      email,
      password,
      isDonator,
      AddressNumber,
      AddressState,
      bloodType,
      phoneNumber,
    });
    return user;
  }
}

export { CreateUserUseCase };
