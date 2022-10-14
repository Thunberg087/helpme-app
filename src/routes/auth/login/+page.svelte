<script lang="ts">
  import api from '$lib/client/apiConnector'

  let email: string = ''
  let password: string = ''

  let errorMessage: string = ''

  const login = async () => {
    const { error } = await api.getRoutes().auth.login({ email, password })

    if (!error) {
      location.replace('/home')
    } else {
      errorMessage = error.message
    }
  }
</script>

<div>
  <h1>Login</h1>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button on:click={login}>Login</button>
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
</div>

<style lang="scss">
</style>
