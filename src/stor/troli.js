import {writable, derived} from 'svelte/store'
import localcart from '../localCart'

const stortroli = writable([...localcart])

export const jumlahHarga = derived(stortroli, ($dalamTroli) => {
    let jumlah = $dalamTroli.reduce(
      (acc, curr) => acc + curr.amount * curr.price,
      0
    );
    return jumlah.toFixed(2);
  });
  
export default stortroli