interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  isDonator: boolean;
  bloodType?: string;
  AddressState?: string;
  AddressNumber?: string;
  phoneNumber?: string;
}

export { ICreateUserDTO };
