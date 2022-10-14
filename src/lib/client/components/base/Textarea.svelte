<script lang="ts">
  export let value: string
  export let placeholder: string
</script>

<textarea name="" bind:value {placeholder} />

<style lang="scss">
  textarea {
    border: 1px solid #dfdfdf;
    padding: 10px;
    border-radius: 5px;
  }
</style>
