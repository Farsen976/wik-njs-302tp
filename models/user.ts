import api from '../api'

export interface UserSchema {
  id      : number
  name    : string
  username: string
  email   : string
  address : string
}

export interface User extends UserSchema{}
export class User implements UserSchema{
  constructor(data){
   Object.assign(this, data)
  }
  static async create(user: User): Promise<void>{
      await api.post('/users',user)
  }
  static async findById(userId: number): Promise<User>{
    const { data } = await api.get<User>(`users/${userId}`)
    const user     = new User(data)
    return user
  }
}

