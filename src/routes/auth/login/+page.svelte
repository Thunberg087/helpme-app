<script lang="ts">
  import { page } from '$app/stores'
  import api from '$lib/client/apiConnector'


  let email: string = 'thunberg00@gmail.com'
  let password: string = 'Test123'

  let errorMessage: string = ''

  const login = async () => {
    const { data, error } = await api.getRoutes().auth.login({ email, password })

    if (!error) {
      location.replace('/home')
    } else {
      console.log(error)
      errorMessage = error.data.message || 'Something went wrong'
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
