<script>
  import { onMount } from 'svelte'
  import { navigate, link } from 'svelte-routing'
  import userstor from '../stor/user'
  import stortroli, { jumlahHarga } from '../stor/troli'
  import { element } from 'svelte/internal'
  import submitOrder from '../strapi/submitOrder'
  import globalnav from '../stor/globalNav'

  let name = ''

  let elemenkad
  let errorkad
  let kad
  let stripe
  let elements

  $: isempty = !name

  onMount(() => {
    if (!$userstor.jwt) {
      navigate('/')
      return
    }
    if ($jumlahHarga < 1) {
      return
    }
    stripe = Stripe('pk_test_e3ha78maNAH3f1jzat61YZCj00IvZTtHjw')
    elements = stripe.elements()
    kad = elements.create('card')
    kad.mount(elemenkad)
    kad.addEventListener('change', function (event) {
      if (event.error) {
        errorkad.textContent = event.error.message
      } else {
        errorkad.textContent = ''
      }
    })
  })
  async function handleSubmit() {
    globalnav.togelItem('alert', true, 'submitting order.. tunggu sebentar!')

    let response = await stripe
      .createToken(kad)
      .catch((error) => console.log(error))
    const { token } = response
    if (token) {
      const { id } = token
      let ode = await submitOrder({
        name,
        total: $jumlahHarga,
        items: $stortroli,
        stripeTokenId: id,
        userToken: $userstor.jwt,
      })
      if (ode) {
        globalnav.togelItem('alert', false, 'ode complete')
        stortroli.set([])
        localStorage.setItem('troli', JSON.stringify([]))
        navigate('/')
        return
      }
    } else {
      globalnav.togelItem('alert', true, 'ada error pada ode, cuba lagi')
    }
  }
</script>

{#if $jumlahHarga > 0}
  <section class="form">
    <h2 class="section-title">cekout</h2>
    <form class="checkout-form" on:submit|preventDefault={handleSubmit}>
      <h3>jumlah order: ${$jumlahHarga}</h3>
      <div class="form-control">
        <label for="name">nama anda</label>
        <input type="text" id="name" bind:value={name} />
      </div>
      <!-- stripe -->
      <div class="stripe-input">
        <label for="card-element">maklumat kad</label>
        <p class="stripe-info">
          guna yang ni
          <span>4242 4242 4242 4242</span>
          <br />
          masukkan poskod 5 huruf
          <br />
          masuk 3 nombor utk CVC
        </p>

        <div id="card-element" bind:this={elemenkad}>
          <!-- bind semua element -->
        </div>
        <div id="card-errors" bind:this={errorkad} role="alert" />
      </div>
      <!-- end of stripe -->
      {#if isempty}
        <p class="form-empty">sila isi nama</p>
      {:else}
        <!-- else content here -->
      {/if}
      <button
        type="submit"
        class="btn btn-block btn-primary"
        disabled={isempty}
        class:disabled={isempty}>
        submit
      </button>
    </form>
  </section>
{:else}
  <div class="chekout-empty">
    <h2>Troli kosong</h2>
    <a href="/produk" use:link class="btn btn-primary">Mula shopping</a>
  </div>
{/if}
