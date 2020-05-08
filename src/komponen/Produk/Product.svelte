<script>
  export let produk;
  const { title, image, price, id } = produk;
  import { link } from "svelte-routing";
</script>

<article class="product">
  <div class="img-container">
    <img src={image} alt="title" />
    <a href={`/produk/${id}`} class="btn btn-primary product-link" use:link>
      Lanjut
    </a>
  </div>
  <div class="product-footer">
    <p class="product-title">{title}</p>
    <p class="product-title">${price}</p>
  </div>
</article>
