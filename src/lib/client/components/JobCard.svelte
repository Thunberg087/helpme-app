<script lang="ts">
  import apiConnector from '$lib/client/apiConnector'
  import type { IJobPopulated } from '$lib/shared/types/jobs'
  import { formatDateWithDayname } from '$lib/shared/util/dateFormatter'

  export let job: IJobPopulated
  export let isSearched: boolean

  const getFirstName = (name: string) => {
    return name.split(' ')[0]
  }

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const takeJob = () => {
    apiConnector.getRoutes().jobs.takeJob.post({
      jobId: job._id,
    })
  }

  const removeSearchedJob = () => {
    apiConnector.getRoutes().jobs.removeSearchedJob.delete(job._id)
  }
</script>

<div class="jobCard">
  <div>
    <h4>{job.name}</h4>
    <br />
    <p>{job.description}</p>
  </div>
  <div class="botWrapper">
    <div class="jobInfoBox">
      <p>{formatDateWithDayname(job.createdAt)}</p>
      <p>Upplagd av {capitalize(getFirstName(job.creator.fullname))}</p>
    </div>
    {#if !isSearched}
      <button class="takeJobButton" on:click={takeJob}>Ta jobb</button>
    {:else}
      <button class="takeJobButton searched" on:click={removeSearchedJob}>Jobb sökt</button>
    {/if}
  </div>
</div>

<style lang="scss">
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

  .botWrapper {
    display: flex;
    justify-content: space-between;

    .takeJobButton {
      margin-top: 10px;
      padding: 5px 12px;
      border: none;
      border-radius: 5px;
      background-color: $accentColor;
      color: white;
      cursor: pointer;
      background-image: linear-gradient(to right, $accentColor, #16a61c);
      box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.5);
      transition: 0.2s;

      &:hover {
        background-image: linear-gradient(to right, #16a61c, #1cb822);
      }

      &.searched {
        background-image: linear-gradient(to right, #166ca6, #1c87b8);

        &:hover {
          background-image: linear-gradient(to right, #1d7dbd, #2797ca);
        }
      }
    }

    .jobInfoBox {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      p {
        font-size: 0.7rem;
        margin: 0;
      }
    }
  }
</style>
