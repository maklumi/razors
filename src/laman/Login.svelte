<script>
  import loginUser from '../strapi/loginUser'
  import registerUser from '../strapi/registerUser'
  import { navigate } from 'svelte-routing'
  import globalnav from '../stor/globalNav'

  let email = ''
  let password = ''
  let username = 'default username'
  let isMember = true
  $: isEmpty = !email || !password || !username || $globalnav.alert

  function togelMember() {
    isMember = !isMember
    if (!isMember) {
      username = ''
    } else {
      username = 'default username'
    }
  }
  async function handleSubmit() {
    globalnav.togelItem('alert', true, 'loading..')
    let user
    if (isMember) {
      user = await loginUser({ email, password })
    } else {
      user = await registerUser({ email, username, password })
    }

    if (user) {
      globalnav.togelItem('alert', true, 'Selamat datang ke kedai online frenz')
      navigate('/produk')
      return
    } else {
      globalnav.togelItem('alert', true, 'Ada masalah sikit. Cuba lagi')
    }
  }
</script>

<section class="form">
  <h2 class="section-title">
    {#if isMember}sign in{:else}daftar{/if}
  </h2>
  <form class="login-form" on:submit|preventDefault={handleSubmit}>

    <div class="form-control">
      <label for="email">email</label>
      <input type="email" id="email" bind:value={email} />
    </div>

    <div class="form-control">
      <label for="password">password</label>
      <input type="password" id="password" bind:value={password} />
    </div>

    {#if !isMember}
      <div class="form-control">
        <label for="username">username</label>
        <input type="text" id="username" bind:value={username} />
      </div>
    {/if}

    {#if isEmpty}
      <p class="form-empty">sila isi semua</p>
    {/if}

    <button
      type="submit"
      class="btn btn-block btn-primary"
      disabled={isEmpty}
      class:disabled={isEmpty}>
      submit
    </button>

    {#if isMember}
      <p class="register-link">
        Belum member?
        <button type="button" on:click={togelMember}>daftar sini</button>
      </p>
    {:else}
      <p class="register-link">
        Sudah member?
        <button type="button" on:click={togelMember}>klik sini</button>
      </p>
    {/if}
  </form>
</section>
