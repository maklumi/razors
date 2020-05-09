<script>
  import globalnav from '../../stor/globalNav'
  import { fly, fade, blur } from 'svelte/transition'
  import { link } from 'svelte-routing'
  import LisItemTroli from './LisItem.svelte'
  import user from '../../stor/user'
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => globalnav.togelItem('troli', false)}>
          <i class="fas fa-window-close" />

        </button>
        <h2 class="cart-title">Troli kamu</h2>
        <span />
      </div>

      <LisItemTroli />

      <div class="cart-footer">
        {#if $user.jwt}
          <a
            href="/cekout"
            use:link
            class="btn btn-primary btn-block"
            on:click={() => globalnav.togelItem('troli', false)}>
            cekout
          </a>
        {:else}
          <p class="cart-login">
            <a href="/login" use:link>login</a>
            dulu untuk cekout
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>
