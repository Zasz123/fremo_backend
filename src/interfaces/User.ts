import { UserAttributes } from "../database/models/user.models";

export interface IUserRegister {
  googleUid: string;
  accountId: string;
  password: string;
  name: string;
}

export interface IUserLogin {
  accountId: string;
  password: string;
}
