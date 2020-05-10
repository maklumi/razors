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

<h1>Cekout</h1>
