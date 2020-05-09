import axios from 'axios'
import url from './URL'
import setupUser from './setupUser'

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password,
    })
    .catch((e) => console.log(e))

  if (response) {
    setupUser(response)
  }
  return response
}

export default loginUser
