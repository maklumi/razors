<script>
  import Hero from "../komponen/Hero.svelte";
  import { link } from "svelte-routing";
  import Tampilan from "../komponen/Produk/Featured.svelte";
</script>

<Hero>
  <a href="produk" class="btn btn-primary btn-hero" use:link>kedai</a>
</Hero>
<Tampilan tajuk="Laku Keras" />
