import { writable } from 'svelte/store'

const globalStor = writable({
  sidebar: false,
  troli: false,
  alert: false,
  teksAlert: 'teks alert',
  alertDanger: false,
})

const stor = {
  subscribe: globalStor.subscribe,
  // togelTroli: (dengan)=>{
  //     globalStor.update(nilaistor=>{
  //         return {...nilaistor, troli:dengan}
  //     })
  // }
  togelItem: (
    item,
    dengan,
    teksAmaran = 'tiada teks amaran',
    alertDanger = false,
  ) => {
    if (item === 'alert') {
      globalStor.update((nilaiStor) => {
        // modify 2 value lain
        return {
          ...nilaiStor,
          alert: dengan,
          teksAlert: teksAmaran,
          alertDanger,
        }
      })
    } else {
      globalStor.update((nilaiStor) => {
        return { ...nilaiStor, [item]: dengan }
      })
    }
  },
}
export default stor
