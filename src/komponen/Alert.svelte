<script>
  import { fly, fade } from 'svelte/transition'
  import nlobalnav from '../stor/globalNav'
  import { onMount, onDestroy } from 'svelte'

  const handleClose = (handleClose) => {
    console.log('alert close')
  }
</script>

<div
  class="alert-container"
  in:fly={{ y: -200, duration: 1000 }}
  out:fade={{ duration: 0 }}>
  <div class="alert">
    <p>ini alert</p>
    <button on:click={handleClose} class="alert-close">
      <i class="fas fa-window-close" />
    </button>
  </div>
</div>
