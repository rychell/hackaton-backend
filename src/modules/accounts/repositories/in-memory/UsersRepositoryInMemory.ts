import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  save(userData: ICreateUserDTO): User {
    const user = Object.assign(new User(), userData);
    this.users.push(user);
    return user;
  }
}

export { UsersRepositoryInMemory };
