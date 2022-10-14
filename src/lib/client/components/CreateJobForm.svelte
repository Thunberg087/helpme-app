<script lang="ts">
  import apiConnector from '$lib/client/apiConnector'
  import Button from '$lib/client/components/base/Button.svelte'
  import Input from '$lib/client/components/base/Input.svelte'
  import Textarea from '$lib/client/components/base/Textarea.svelte'

  let name: string = ''
  let description: string = ''

  export let onPosted: () => void = () => {}

  const postJob = async () => {
    await apiConnector.getRoutes().jobs.post({ name, description })
    name = ''
    description = ''
    onPosted()
  }
</script>

<form on:submit|preventDefault={postJob}>
  <Input placeholder="Namn" bind:value={name} />
  <Textarea placeholder="Beskrivning" bind:value={description} />
  <Button>Lägg ut jobb</Button>
</form>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
