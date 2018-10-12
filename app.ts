import Album from './models/album'
import { User } from './models/user';




async function run() {
  const album = await Album.findById(2, ['user', 'photos'])
  const user  = new User(1,'toto','toto123','toto@gmail.com','3 rue de paris')
  await User.create(user)
  console.log(album)
  console.log(user)
  debugger
}

run().catch((err) => {
  console.error(err)
})