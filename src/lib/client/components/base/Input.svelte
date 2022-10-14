<script lang="ts">
  export let value: string
  export let placeholder: string
  export let type: 'text' | 'password' | 'date' | 'number' | 'email' = 'text'

  function typeAction(node: HTMLInputElement) {
    node.type = type
  }
</script>

<input use:typeAction bind:value {placeholder} />

<style lang="scss">
  input {
    border: 1px solid #dfdfdf;
    padding: 10px;
    border-radius: 5px;
  }
</style>
