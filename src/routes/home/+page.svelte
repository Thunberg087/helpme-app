<script lang="ts">
  import api from '$lib/client/apiConnector'
  import JobCard from '$lib/client/components/JobCard.svelte'
  import Navbar from '$lib/client/components/Navbar.svelte'
  import type { IJobPopulated } from '$lib/shared/types/jobs'

  let jobs: IJobPopulated[] = []

  const getJobs = async () => {
    const { data } = await api.getRoutes().jobs.get()

    if (data) {
      jobs = data.jobs
    }
  }

  getJobs()

  let mySearchedJobs: IJobPopulated[] = []

  const getMySearchedJobs = async () => {
    const { data } = await api.getRoutes().user.getMySearchedJobs()

    if (data) {
      mySearchedJobs = data.jobs
    }
  }

  getMySearchedJobs()
</script>

<svelte:head>
  <title>Hem</title>
</svelte:head>

<Navbar />

<div class="container">
  <!-- <button on:click={logout}>Logout</button> -->
  <h1>Jobb</h1>
  <div class="jobGrid">
    {#each jobs as job}
      <JobCard {job} isSearched={Boolean(mySearchedJobs.find((j) => j._id === job._id))} />
    {/each}
  </div>
</div>

<style lang="scss">
  .jobGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
</style>
