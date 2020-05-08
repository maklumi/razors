<script>
  import SmallNavbar from "./SmallNavbar.svelte";
  import BigNavbar from "./BigNavbar.svelte";
  let lebarSkrin;
</script>

<svelte:window bind:innerWidth={lebarSkrin} />
{#if lebarSkrin > 900}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}
