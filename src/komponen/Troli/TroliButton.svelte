<script>
  import globalnav from "../../stor/globalNav";
  import trolistor from "../../stor/troli";
  $: jumlahbarang = $trolistor.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
</script>

<div class="btn-cart-container">
  <button
    class="btn-cart-toggle"
    on:click={() => globalnav.togelItem('troli', true)}>
    <i class="fas fa-cart-plus" />
  </button>

  <span class="btn-cart-items">{jumlahbarang}</span>
</div>
