import api from '../api'
import Album, { AlbumSchema } from './album';

export interface UserSchema {
  id      : number
  name    : string
  username: string
  email   : string
  address : string
}

export interface User extends UserSchema{}
export class User implements UserSchema{
  albums: AlbumSchema[] | []
  constructor(data){
   Object.assign(this, data)
  }
  static async create(user: User): Promise<void>{
      await api.post('/users',user)
  } 
  static async findById(userId: number, includes?: string ): Promise<User>{
    const { data } = await api.get<User>(`users/${userId}`)
    const user     = new User(data)
    if(includes) await user.loadIncludes(includes)
    return user
  }

  async loadIncludes(includes:string): Promise<void> {
    if(includes === 'album'){
      const {data :albumdata} = await api.get<AlbumSchema[]>(`albums/${this.id}`)
            this.albums       = albumdata
    }
   
  }

  static async deleteUser(userId: number): Promise<void>{
    await api.delete(`users/${userId}`)
  }
  static async updateById(userId: number, user: User): Promise<void>{
    const { data } = await api.put<User>(`users/${userId}`, user)
  }
}

