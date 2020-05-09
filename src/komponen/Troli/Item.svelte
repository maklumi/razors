<script>
  export let item;
  let { id, title, price, image, amount } = item;
</script>

<div class="cart-item">
  <img src={image} alt={title} />
  <div>
    <h4>{title}</h4>
    <h5>{price}</h5>
    <button
      class="cart-btn remove-btn"
      on:click={() => {
        console.log('removed');
      }}>
      keluarkan
    </button>
  </div>
  <div>
    <button
      class="cart-btn amount-btn"
      on:click={() => {
        console.log('tambah');
      }}>
      <i class="fas fa-chevron-up" />
    </button>

    <p class="item-amount">{amount}</p>

    <button
      class="cart-btn amount-btn"
      on:click={() => {
        console.log('turun');
      }}>
      <i class="fas fa-chevron-down" />
    </button>
  </div>
</div>
