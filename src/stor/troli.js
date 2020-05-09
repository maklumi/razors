import {writable} from 'svelte/store'
import localcart from '../localCart'

const stortroli = writable([...localcart])

export default stortroli