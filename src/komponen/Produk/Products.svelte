<script>
  import barangan from '../../stor/produks'
  import Barang from './Product.svelte'
  import Loading from '../Loading.svelte'
  export let tajuk = ''
</script>

<section class="section">
  <h2 class="section-title">{tajuk}</h2>
  <div class="products-center">
    {#each $barangan as produk (produk.id)}
      <Barang {produk} />
    {:else}
      <Loading />
    {/each}
  </div>
</section>
