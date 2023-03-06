import {User, UserToken} from "~/types/api/user";

export type RandomUserDto = Pick<User, "id" | "username" | "password">