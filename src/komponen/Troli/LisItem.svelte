<script>
  import Item from "./Item.svelte";
  import dalamTroli from "../../stor/troli";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
</script>

<section class="cart-items">
  <article>
    {#each $dalamTroli as item, indeks (item.id)}
      <Item />
    {:else}
      <h2 class="empty-cart">Troli masih kosong</h2>
    {/each}
  </article>
</section>
