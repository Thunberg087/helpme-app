<script lang="ts">
  import api from '$lib/client/apiConnector'

  const logout = async () => {
    try {
      await api.getRoutes().auth.logout()
      location.replace('/home')
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div>
  <h1>Page</h1>
  <button on:click={logout}>Logout</button>
</div>

<style lang="scss">
</style>
