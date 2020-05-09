<script>
  import globalnav from "../../stor/globalNav";
</script>

<div class="btn-cart-container">
  <button
    class="btn-cart-toggle"
    on:click={() => globalnav.togelItem('troli', true)}>
    <i class="fas fa-cart-plus" />
  </button>

  <span class="btn-cart-items">10</span>
</div>
