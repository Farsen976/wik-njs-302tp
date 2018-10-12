import api from '../api'

export interface UserSchema {
  id      : number
  name    : string
  username: string
  email   : string
  address : {
    street : string
    suite  : string
    city   : string
    zipcode: string
    geo    : { lat: number, lng: number }
  },
  phone  : string
  website: string
  company: { name: string, catchPhrase: string, bs: string }
}

export interface User extends UserSchema{}
export class User implements UserSchema{
  constructor(id : number,name:string,username:string,email:string,address?:any,phone?:string,website?:string,compagny?:any){
    this.id       = id;
    this.name     = name;
    this.username = username;
    this.email    = email;
    this.address  = address;
    this.website  = website;
    this.company  = compagny;
  }
 public static async create(user: User): Promise<void>{
    await api.post('/users',user)
    
 } 
}

