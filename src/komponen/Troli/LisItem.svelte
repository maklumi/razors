<script>
  import Item from "./Item.svelte";
  import dalamTroli, { jumlahHarga } from "../../stor/troli";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
</script>

<section class="cart-items">
  <article>
    {#each $dalamTroli as item, indeks (item.id)}
      <div
        in:fly={{ delay: (indeks + 1) * 400, x: 100 }}
        out:fly={{ x: -100 }}
        animate:flip>
        <Item {item} />
      </div>
    {:else}
      <h2 class="empty-cart">Troli masih kosong</h2>
    {/each}
  </article>
  <h3 class="cart-total">Jumlah: ${$jumlahHarga}</h3>
</section>
