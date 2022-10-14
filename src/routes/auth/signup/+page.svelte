<script lang="ts">
  import api from '$lib/client/apiConnector'

  let email: string = ''
  let fullname: string = ''
  let password: string = ''

  let errorMessage: string = ''

  const signup = async () => {
    const { error } = await api.getRoutes().auth.signup({ email, fullname, password })

    if (error) {
      errorMessage = error.message
    } else {
      location.replace('/auth/login')
    }
  }
</script>

<div>
  <h1>Sign up</h1>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="text" bind:value={fullname} placeholder="Fullname" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button on:click={signup}>Signup</button>
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
</div>

<style lang="scss">
</style>
