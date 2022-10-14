<script lang="ts">
  import api from '$lib/client/apiConnector'

  let email: string = 'thunberg00@gmail.com'
  let fullname: string = 'Jonathan Thunberg'
  let password: string = 'Test123'

  const signup = () => {
    api.getRoutes().auth.signup({ email, fullname, password })
  }
</script>

<div>
  <h1>Sign up</h1>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="text" bind:value={fullname} placeholder="Fullname" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button on:click={signup}>Signup</button>
</div>

<style lang="scss">
</style>
