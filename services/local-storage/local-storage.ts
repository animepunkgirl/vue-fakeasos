import {User, UserToken} from "~/types/api/user";
import {StorageName, UserStorageToken } from "~/services/local-storage/local-storage.types";

const saveToken = (id: User["id"], token: UserToken) => {
  localStorage.setItem(StorageName.Token, JSON.stringify({
    id,
    token
  }))
}

const getToken = (): UserStorageToken | null => {
  try {
    const user = localStorage.getItem(StorageName.Token)
    if(!user)
      return null;
    return JSON.parse(user) as UserStorageToken
  } catch(e) {
    return null;
  }
}

const removeToken = () => {
  localStorage.removeItem(StorageName.Token)
}
const LocalStorage = {
  getToken,
  saveToken,
  removeToken
}
export default LocalStorage