<script>
  import { onMount } from 'svelte'
  import { navigate, link } from 'svelte-routing'
  import userstor from '../stor/user'
  import { jumlahHarga } from '../stor/troli'

  onMount(() => {
    if (!$userstor.jwt) {
      navigate('/')
    }
  })
</script>

{#if $jumlahHarga > 0}
  <h1>form</h1>
{:else}
  <div class="chekout-empty">
    <h2>Troli kosong</h2>
    <a href="/produk" use:link class="btn btn-primary">Mula shopping</a>
  </div>
{/if}
