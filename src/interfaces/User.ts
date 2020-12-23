export interface IUserRegister {
  accountId: string;
  password: string;
  name: string;
}

export interface IUserLogin {
  accountId: string;
  password: string;
}

export interface IUserMyInfo {
  token: string;
}
