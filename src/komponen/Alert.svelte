<script>
  import { fly, fade } from 'svelte/transition'
  import globalnav from '../stor/globalNav'
  import { onMount, onDestroy } from 'svelte'

  const handleClose = (handleClose) => {
    globalnav.togelItem('alert', false)
  }
</script>

<div
  class="alert-container"
  in:fly={{ y: -200, duration: 1000 }}
  out:fade={{ duration: 0 }}
  class:alert-danger={$globalnav.alertDanger}>
  <div class="alert">
    <p>{$globalnav.teksAlert}</p>
    <button on:click={handleClose} class="alert-close">
      <i class="fas fa-window-close" />
    </button>
  </div>
</div>
