import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  save(user: ICreateUserDTO): User;
}
export { IUsersRepository };
