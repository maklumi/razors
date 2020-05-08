<script>
  import pautan from "../../konstan/pautan";
  import { link } from "svelte-routing";
  import globalnav from "../../stor/globalNav";
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => globalnav.togelItem('sidebar', false)}>
        <i class="fas fa-window-close" />
      </button>
    </div>
    <img
      src="assets/images/logo.svg"
      class="logo sidebar-logo"
      alt="logo razor" />
    <ul class="sidebar-links">
      {#each pautan as p}
        <li>
          <a
            href={p.url}
            use:link
            on:click={() => globalnav.togelItem('sidebar', false)}>
            {p.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
