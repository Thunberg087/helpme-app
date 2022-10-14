<script lang="ts">
  import CreateJobForm from '$lib/client/components/CreateJobForm.svelte'
  import Navbar from '$lib/client/components/Navbar.svelte'


</script>

<svelte:head>
  <title>Lägg ut jobb</title>
</svelte:head>

<Navbar />

<div class="container">
  <div class="formWrapper">
    <CreateJobForm />
  </div>
</div>

<style lang="scss">
  .container {
    margin: 20px auto;
  }

  .formWrapper {
    margin: auto;
    margin-top: 10vh;
  }

  @media screen and (min-width: $md) {
    .formWrapper {
      max-width: 50%;
    }
  }
</style>
