<script>
  import { page } from '$app/stores'

  import NotFoundSvg from '$lib/client/assets/svg/404.svg'
</script>

<div class="wrapper">
  <div class="content">
    {#if $page.status == 404}
      <img src={NotFoundSvg} alt="404" />
    {:else}
      <h1>{$page.status}</h1>
      <h2>{$page.error?.message}</h2>
    {/if}
    <a href="https://storyset.com/web">Web illustrations by Storyset</a>
  </div>
</div>

<style lang="scss">
  .wrapper {
    height: 100vh;
    width: 100%;
    display: flex;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .content {
      margin: auto;

      h1 {
        font-size: 10rem;
      }

      h2 {
        font-size: 4rem;
      }
    }

    a {
      display: none;
    }
  }
</style>
