import { writable } from 'svelte/store'

const globalStor = writable({
  sidebar: false,
  troli: false,
  alert: true,
})

const stor = {
  subscribe: globalStor.subscribe,
  // togelTroli: (dengan)=>{
  //     globalStor.update(nilaistor=>{
  //         return {...nilaistor, troli:dengan}
  //     })
  // }
  togelItem: (item, dengan) => {
    globalStor.update((nilaiStor) => {
      return { ...nilaiStor, [item]: dengan }
    })
  },
}
export default stor
