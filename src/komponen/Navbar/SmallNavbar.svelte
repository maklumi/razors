<script>
  import TroliBtn from '../Troli/TroliButton.svelte'
  import { link } from 'svelte-routing'
  import globalnav from '../../stor/globalNav'
  let togelsidebar = globalnav.togelItem
</script>

<nav class="navbar">
  <div class="nav-center">

    <button
      class="btn-sidebar-toggle"
      on:click={() => togelsidebar('sidebar', true)}>
      <i class="fas fa-bars" />
    </button>

    <a href="/" use:link class="nav-logo">
      <img src="/assets/images/logo.svg" class="logo" alt="logo" />
    </a>

    <TroliBtn />

  </div>
</nav>
