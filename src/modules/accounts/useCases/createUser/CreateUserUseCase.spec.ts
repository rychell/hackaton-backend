import faker from "faker";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
describe("Create User use case", () => {
  beforeEach(() => {
    createUserUseCase = new CreateUserUseCase();
  });
  it("Should be able to create a new user", () => {
    const user: ICreateUserDTO = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      isDonator: faker.datatype.boolean(),
    };
    const createdUser = createUserUseCase.execute(user);
    expect(createdUser).toHaveProperty("id");

    expect(createdUser).toMatchObject({
      name: user.name,
      email: user.email,
      isDonator: user.isDonator,
    });
  });
});
