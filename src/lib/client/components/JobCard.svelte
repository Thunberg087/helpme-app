<script lang="ts">
  import type { IJobPopulated } from '$lib/shared/types/jobs'
  import { formatDate, formatDateWithMonthNameAndTime } from '$lib/shared/util/dateFormatter'

  export let job: IJobPopulated

  const getFirstName = (name: string) => {
    return name.split(' ')[0]
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
      <p>{formatDateWithMonthNameAndTime(job.createdAt)}</p>
      <p>Upplagd av {getFirstName(job.creator.fullname)}</p>
    </div>
    <button class="takeJobButton">Ta jobb</button>
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
    }

    .jobInfoBox {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      p {
        font-size: 0.6rem;
        margin: 0;
      }
    }
  }
</style>
