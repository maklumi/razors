<script>
  import SmallNavbar from "./SmallNavbar.svelte";
  import BigNavbar from "./BigNavbar.svelte";
  import globalnav from "../../stor/globalNav";
  let lebarSkrin;
  $: if (lebarSkrin > 900) {
    globalnav.togelItem("sidebar", false);
  }
</script>

<svelte:window bind:innerWidth={lebarSkrin} />
{#if lebarSkrin > 900}
  <BigNavbar />
{:else}
  <SmallNavbar />
{/if}
