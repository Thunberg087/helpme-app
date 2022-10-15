<script lang="ts">
  import Navbar from '$lib/client/components/Navbar.svelte'
  import api from '$lib/client/apiConnector'
  import type { IJobPopulated } from '$lib/shared/types/jobs'

  let myJobs: IJobPopulated[] = []

  const getMyJobs = async () => {
    const { data } = await api.getRoutes().user.getMyJobs()

    if (data) {
      myJobs = data.jobs
    }
  }

  let mySearchedJobs: IJobPopulated[] = []

  const getMySearchedJobs = async () => {
    const { data } = await api.getRoutes().user.getMySearchedJobs()

    if (data) {
      mySearchedJobs = data.jobs
    }
  }

  getMySearchedJobs()
  getMyJobs()
</script>

<svelte:head>
  <title>Mina jobb</title>
</svelte:head>

<Navbar />

<div class="container">
  <h2>Mina utlagda jobb</h2>
  <div class="jobGrid">
    {#each myJobs as job}
      <div class="jobCard">
        <h4>
          {job.name}
        </h4>

        <h6>Job takers</h6>
        <!-- {#each job.jobTakers as user}
          <div>
            {user.fullname}
          </div>
        {/each} -->
      </div>
    {/each}
  </div>
  <br />
  <br />
  <h2>Ansökta jobb</h2>
  <div class="jobGrid">
    {#each mySearchedJobs as job}
      <div class="jobCard">
        <h4>
          {job.name}
        </h4>
        <p>
          {job.creator.fullname}
        </p>
      </div>
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

  .jobCard {
    padding: 20px 25px;
    border-radius: 10px;
    box-shadow: 0 0 6px -2px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 0.9rem;
      line-height: 1.3rem;
    }
  }
</style>
