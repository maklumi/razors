<script>
  import user from '../stor/user'
  import { link } from 'svelte-routing'

  import navstor from '../stor/globalNav'
</script>

{#if $user.jwt}
  <a
    href="/"
    class="logout-btn"
    on:click={() => {
      navstor.togelItem('sidebar', false)
    }}>
    log keluar
  </a>
{:else}
  <a
    href="/"
    class="logout-btn"
    on:click={() => {
      navstor.togelItem('sidebar', false)
    }}>
    login
  </a>
{/if}
