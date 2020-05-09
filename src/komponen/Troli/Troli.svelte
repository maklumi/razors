<script>
  import globalnav from "../../stor/globalNav";
  import { fly, fade, blur } from "svelte/transition";
  import { link } from "svelte-routing";

  let user = false;
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

      <p>Barang dalam troli</p>

      <div class="cart-footer">
        {#if user}
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
