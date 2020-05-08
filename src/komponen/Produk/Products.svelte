<script>
  import { onMount, onDestroy } from "svelte";
  import barangan from "../../stor/defaultProduk";

  let localProducts = [];
  onMount(() => {
    barangan.subscribe((nilai) => {
      localProducts = nilai;
      console.log(nilai);
    });
  });
</script>

<h1>products comp</h1>
{#each localProducts as produk}
  <h2>{produk.title}</h2>
{/each}
