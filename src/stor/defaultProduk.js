import {writable, derived} from 'svelte/store'
import localProducts from '../localProducts'

const storan = writable(flattenProducts([...localProducts]))

function flattenProducts(data){
    return data.map(item=>{
        let imej = item.image.url
        return {...item, image:imej}
    })
}

export const barangmukadepan = derived(storan, $fitur =>{
    return $fitur.filter((item) => item.featured === true)
})

export default storan