<script>
  import { onMount, onDestroy } from "svelte";
  import barangan from "../../stor/defaultProduk";
</script>

<h1>products comp</h1>
{#each $barangan as produk}
  <h2>{produk.title}</h2>
{/each}
