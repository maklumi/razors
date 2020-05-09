<script>
  export let tajuk = ''

  import barangan, { barangmukadepan } from '../../stor/produks'
  import Barang from './Product.svelte'
  import Loading from '../Loading.svelte'
</script>

{#if $barangmukadepan.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{tajuk}</h2>
    <div class="products-center">
      {#each $barangmukadepan as produk (produk.id)}
        <Barang {produk} />
      {/each}
    </div>
  </section>
{/if}
