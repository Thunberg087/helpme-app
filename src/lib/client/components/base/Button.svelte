<script lang="ts">
  export let onClick: () => void
</script>

<button on:click={onClick}>
  <slot />
</button>

<style lang="scss">
  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #111;
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }
</style>
