import Album from './models/album'
import { User } from './models/user'

async function run() {
  //const album = await Album.findById(2, ['user', 'photos'])
  const data  = {
    name    : 'toto457456465',
    username: 'toto123',
    email   : 'toto@gmail.com',
    address : 'cheztamere@bitch.com'
  }
  const user = new User(data)
<<<<<<< HEAD
 console.log(await User.create(user))
  console.log(await User.findById(1))
 console.log(await User.deleteUser(1))
=======
 //console.log(await User.create(user))
 //console.log(await User.findById(1))
 await User.updateById(1, user)
>>>>>>> master
}

run().catch((err) => {
  console.error(err)
})