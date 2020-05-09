import { writable } from 'svelte/store'

const userStor = writable(getStorUser())

function getStorUser() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, jwt: null }
}

export function setStorUser(usr) {
  localStorage.setItem('user', JSON.stringify(usr))
}

export function setUser(usr) {
  userStor.set(usr)
}
export default userStor
