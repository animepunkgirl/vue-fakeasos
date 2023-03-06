
export type UserToken = string;

export interface User {
  id: number,
  username: string,
  password: string,
  email: string,
  name: {
    firstname: string,
    lastname: string
  }
  phone: string,
  address: Address
}

export interface Address {
  geolocation: Geolocation
  city: string,
  street: string,
  number: number,
  zipcode: string
}

export interface Geolocation {
  "lat": string,
  "long": string
}