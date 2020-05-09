import { setStorUser, setUser } from '../stor/user'

function setupUser(response) {
  const { jwt } = response.data
  const { username } = response.data.user
  const user = { username, jwt }
  setStorUser(user)
  setUser(user)
}

export default setupUser
