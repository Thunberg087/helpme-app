
export interface IUser {
  _id: string
  email: string
  fullname: string
  passHash?: string
}

export interface ISignupInput {
  email: string
  fullname: string
  password: string
}

export interface ILoginInput {
  email: string
  password: string
}
