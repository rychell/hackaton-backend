import { v4 as uuidv4 } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  isDonator: boolean;
  bloodType?: string;
  AddressState?: string;
  AddressNumber?: string;
  phoneNumber?: string;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
