import { UserSchema } from "./user";
import { PhotoSchema } from "./photo";
import api from '../api'

export interface AlbumSchema {
  userId: number
  id    : number
  title : string
}

export class Album implements AlbumSchema {
  userId: number
  id    : number
  title : string

  user   : UserSchema | void = null
  photos: PhotoSchema[]      = []

  constructor(albumData: AlbumSchema) {
    Object.assign(this, albumData)
  }

  static async findById(albumId: number, includes?: string[]): Promise<Album> {
    const { data } = await api.get<AlbumSchema>(`albums/${albumId}`)
    const album    = new Album(data)
    if (includes && includes.length) await album.loadIncludes(includes)
    return album
  }

  static async create(album: Album): Promise<void>{
    await api.post<Album>('albums', album)
  }

  static async updateById(albumId: number, album: Album): Promise<void>{
    await api.put<Album>(`albums/${albumId}`, album)
  }
  static async deleteById(albumId: number): Promise<void>{
    await api.delete(`albums/${albumId}`)
  }
  async loadIncludes(includes: string[]): Promise<void> {
    await Promise.all(includes.map(async (include) => {
      switch (include) {
        case 'user': 
          const { data: userData } = await api.get<UserSchema>(`users/${this.userId}`)
                this.user          = userData
          break
        case 'photos': 
          const { data: photoData } = await api.get<PhotoSchema[]>(`photos?albumId=${this.id}`)
                this.photos         = photoData
          break
      }
    }))
  }

  toString() {
    return JSON.stringify(this)
  }
}

export default Album