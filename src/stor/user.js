import { writable } from 'svelte/store'

const user = writable({ pengguna: null, jwt: null })

export default user
