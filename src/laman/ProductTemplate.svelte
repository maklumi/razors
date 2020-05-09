<script>
  export let id;

  import brgn from "../stor/defaultProduk";
  import Loading from "../komponen/Loading.svelte";
  import { link } from "svelte-routing";
  import globalnav from "../stor/globalNav";

  $: prod = $brgn.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!prod ? 'satu produk' : prod.title}</title>
</svelte:head>
{#if !prod}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/produk" use:link class="btn btn-primary">
      Kembali ke semua barangan
    </a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={prod.image} alt={prod.title} />
      </article>
      <article>
        <h1>{prod.title}</h1>
        <h2>${prod.price}</h2>
        <p>{prod.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            globalnav.togelItem('troli', true);
          }}>
          Masuk troli
        </button>
      </article>
    </div>
  </section>
{/if}
