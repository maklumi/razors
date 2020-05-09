import axios from 'axios'
import url from './URL'

async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`${url}/auth/local/register`, {
      username,
      email,
      password,
    })
    .catch((e) => console.log(e))

  if (response) {
  }

  return response
}

export default registerUser
