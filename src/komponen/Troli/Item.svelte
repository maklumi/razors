<script>
  export let id;
  export let title;
  export let price;
  export let image;
  export let amount;

  import { keluarkanItem, tambah, kurang } from "../../stor/troli";
</script>

<div class="cart-item">
  <img src={image} alt={title} />
  <div>
    <h4>{title}</h4>
    <h5>{price}</h5>
    <button
      class="cart-btn remove-btn"
      on:click={() => {
        keluarkanItem(id);
      }}>
      keluarkan
    </button>
  </div>
  <div>
    <button class="cart-btn amount-btn" on:click={() => tambah(id)}>
      <i class="fas fa-chevron-up" />
    </button>

    <p class="item-amount">{amount}</p>

    <button class="cart-btn amount-btn" on:click={() => kurang(id)}>
      <i class="fas fa-chevron-down" />
    </button>
  </div>
</div>
