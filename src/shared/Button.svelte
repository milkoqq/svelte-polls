<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  .primary {
    background-color: palegreen;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .secondary {
    background-color: palevioletred;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .flat {
    box-shadow: none;
  }

  .primary.inverse {
    background-color: white;
    color: palegreen;
    font-weight: bold;
    border: 2px solid black;
  }

  .secondary.inverse {
    background-color: white;
    color: palevioletred;
    font-weight: bold;
    border: 2px solid black;
  }
</style>
