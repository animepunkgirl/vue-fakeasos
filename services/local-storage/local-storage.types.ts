import {User, UserToken} from "~/types/api/user";

export enum StorageName {
  Token = 'token'
}

/*
  In a normal application I would store only a token or pair of access/refresh tokens,
  but since FakeShopApi doesn't have authorization as such,
  I store the id as well, to get data about the user when the page loads.
*/
export interface UserStorageToken {
  id: User["id"]
  token: UserToken
}