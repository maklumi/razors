<script>
  import pautan from "../../konstan/pautan";
  import { link } from "svelte-routing";
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <div class="sidebar-header">
      <button class="btn-close">
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
            href="p.url"
            use:link
            on:click={() => {
              console.log('sidebar');
            }}>
            {p.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
