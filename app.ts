import Album from './models/album'
import { User } from './models/user'

async function run() {
  //const album     = await Album.findById(2, ['user', 'photos'])
  const mockAlbum = {
    userId: 9,
    id    : 9,
    title : 'sauvage sauvage Mati tt'
  }
  //await Album.create(new Album(mockAlbum))
  await Album.deleteById(9)
  //await Album.updateById(9, new Album(mockAlbum))
  const data  = {
    name    : 'toto457456465',
    username: 'toto123',
    email   : 'toto@gmail.com',
    address : 'foo@bar.com'
  }
  const user = new User(data)
//  console.log(await User.create(user))
//   console.log(await User.findById(1))
//  console.log(await User.deleteUser(1))
 //console.log(await User.create(user))
 //console.log(await User.findById(1))
//  await User.updateById(1, user)
//console.log(album)
//console.log(await User.findById(2,'album'))
 //await User.updateById(1, user)
}

run().catch((err) => {
  console.error(err)
})