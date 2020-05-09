<script>
  import user from '../stor/user'
  import { link } from 'svelte-routing'
  import { logout } from '../stor/user'
  import navstor from '../stor/globalNav'
</script>

{#if $user.jwt}
  <a
    href="/"
    class="logout-btn"
    on:click={() => {
      logout()
      navstor.togelItem('sidebar', false)
    }}>
    log keluar
  </a>
{:else}
  <a
    href="/login"
    class="logout-btn"
    on:click={() => {
      navstor.togelItem('sidebar', false)
    }}>
    login
  </a>
{/if}
