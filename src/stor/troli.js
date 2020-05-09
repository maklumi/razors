import { writable, derived } from 'svelte/store'
import localcart from '../localCart'

const stortroli = writable([...localcart])

export const jumlahHarga = derived(stortroli, ($dalamTroli) => {
  let jumlah = $dalamTroli.reduce(
    (acc, curr) => acc + curr.amount * curr.price,
    0,
  )
  return jumlah.toFixed(2)
})

const remove = (id, items) => {
  return items.filter((item) => item.id !== id)
}

export const keluarkanItem = (id) => {
  stortroli.update((items) => {
    return remove(id, items)
  })
}

const bilang = (id, items, tindakan) => {
  return items.map((it) => {
    let amount
    if (tindakan === 'plus') {
      amount = it.amount + 1
    } else if (tindakan === 'minus') {
      amount = it.amount - 1
    } else {
      amount = it.amount
    }
    return it.id === id ? { ...it, amount } : { ...it }
  })
}

export const tambah = (id) => {
  stortroli.update((dalamTroli) => bilang(id, dalamTroli, 'plus'))
}

export const kurang = (id) => {
  stortroli.update((dalamTroli) => {
    let item = dalamTroli.find((it) => it.id === id)
    let troli
    if (item.amount === 1) {
      troli = remove(id, dalamTroli)
    } else {
      troli = bilang(id, dalamTroli, 'minus')
    }
    return [...troli]
  })
}

export const tambahKeTroli = (prod) => {
  stortroli.update((dalamtroli) => {
    const { id } = prod
    let item = dalamtroli.find((it) => it.id === id)
    let troli
    if (item) {
      troli = bilang(id, dalamtroli, 'plus')
    } else {
      let newitem = { ...prod, amount: 1 }
      troli = [...dalamtroli, newitem]
    }
    return troli
  })
}
export default stortroli
