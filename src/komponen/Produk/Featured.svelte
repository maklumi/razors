<script>
  export let tajuk = "";

  import barangan from "../../stor/defaultProduk";
  import Barang from "./Product.svelte";
  import Loading from "../Loading.svelte";
  $: lakukeras = $barangan.filter((item) => item.featured === true);
</script>

{#if lakukeras.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{tajuk}</h2>
    <div class="products-center">
      {#each lakukeras as produk (produk.id)}
        <Barang {produk} />
      {/each}
    </div>
  </section>
{/if}
