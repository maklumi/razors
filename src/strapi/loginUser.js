import axios from 'axios'
import url from './URL'

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password,
    })
    .catch((e) => console.log(e))

  return response
}

export default loginUser
