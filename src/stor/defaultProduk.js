import {writable} from 'svelte/store'
import localProducts from '../localProducts'

const storan = writable([...localProducts])

export default storan