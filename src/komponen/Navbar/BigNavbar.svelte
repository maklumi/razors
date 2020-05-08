<script>
  import ButangTroli from "../Troli/TroliButton.svelte";
  import { link } from "svelte-routing";
  import pautan from "../../konstan/pautan";
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <ul class="nav-links">
        {#each pautan as paut}
          <li>
            <a href={paut.url} use:link>{paut.text}</a>
          </li>
        {/each}
      </ul>
      <a href="/" use:link class="nav-logo big-logo">
        <img src="assets/images/logo.svg" alt="logo razors" class="logo" />
      </a>

      <div class="nav-aside">
        <ButangTroli />
      </div>
    </div>
  </div>
</nav>
