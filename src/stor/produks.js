import { writable, derived } from 'svelte/store'
import url from '../strapi/URL'
import getProduks from '../strapi/getProduks'

const storan = writable([], () => {
  setProduks()
  return () => {}
})

async function setProduks() {
  let prods = await getProduks()
  if (prods) {
    prods = flattenProducts(prods)
    storan.set(prods)
  }
}

function flattenProducts(data) {
  return data.map((item) => {
    // let imej = item.image.url
    let imej = `${url}${item.image.url}`
    return { ...item, image: imej }
  })
}

export const barangmukadepan = derived(storan, ($fitur) => {
  return $fitur.filter((item) => item.featured === true)
})

export default storan
