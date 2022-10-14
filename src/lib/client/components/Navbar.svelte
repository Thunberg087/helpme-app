<script lang="ts">
  import apiConnector from '$lib/client/apiConnector'
  import { page } from '$app/stores'
  import { get } from 'svelte/store'

  const user = JSON.parse(get(page).data.user || '{}')

  const logout = async () => {
    try {
      await apiConnector.getRoutes().auth.logout()
      location.replace('/home')
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div>
  <br /><br />
</div>

<header>
  <div class="headerContent">
    <div class="left">
      <h2>JAG FIXAR</h2>
    </div>
    <div class="mid">
      <div class="navItem" class:active={$page.routeId == 'home'}>
        <a href="/home">Hem</a>
      </div>
      <div class="navItem" class:active={$page.routeId == 'post-job'}>
        <a href="/post-job">Lägg ut jobb</a>
      </div>
    </div>
    <div class="right">
      <div class="navItem" class:active={$page.routeId == 'profile'}>
        <a href="/profile">Min profil</a>
      </div>
    </div>

    <!-- <button on:click={logout}>Logout</button> -->
    <!-- {#if user}
      <p>
        {user.fullname}
      </p>
      {/if} -->
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    .headerContent {
      display: flex;
      justify-content: space-between;
      width: 80%;
      position: relative;

      .left,
      .mid,
      .right {
        display: flex;
        align-items: center;
      }

      .navItem {
        cursor: pointer;
        padding: 10px;
        text-align: center;
        justify-content: center;
        height: 100%;
        border-bottom: 3px solid transparent;
        border-top: 3px solid transparent;
        margin: 0 10px;

        a {
          color: #fff;
          text-decoration: none;
        }

        &.active {
          border-bottom: 3px solid $accentColor;
        }
      }
    }
  }
</style>
