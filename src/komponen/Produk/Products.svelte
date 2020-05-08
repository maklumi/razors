<script>
  import { onMount, onDestroy } from "svelte";
  import barangan from "../../stor/defaultProduk";
  import Barang from "./Product.svelte";
  export let tajuk = "";
</script>

<section class="section">
  <h2 class="section-title">{tajuk}</h2>
  <div class="products-center">
    {#each $barangan as produk (produk.id)}
      <Barang {produk} />
    {/each}
  </div>
</section>
