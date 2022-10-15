<script lang="ts">
  import Navbar from '$lib/client/components/Navbar.svelte'
  import { page } from '$app/stores'
  import { get } from 'svelte/store'
  import type { IUser } from '$lib/shared/types/user'
  import apiConnector from '$lib/client/apiConnector'
  import Button from '$lib/client/components/base/Button.svelte'

  const user: IUser = JSON.parse(get(page).data.user || '{}')

  const logout = async () => {
    try {
      await apiConnector.getRoutes().auth.logout()
      location.replace('/home')
    } catch (error) {
      console.log(error)
    }
  }
</script>

<svelte:head>
  <title>Min profil</title>
</svelte:head>

<Navbar />

<div class="container">
  <h2>Min Profil</h2>
  <p>{user.fullname}</p>
  <Button onClick={logout}>Logga ut</Button>
</div>

<style lang="scss">
</style>
