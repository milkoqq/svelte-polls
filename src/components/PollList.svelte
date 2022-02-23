<script>
  import PollDetails from "./PollDetails.svelte";
  export let polls = [];
</script>

<div class="poll_list">
  {#each polls as poll (poll.id)}
    <div><PollDetails {poll} on:vote /></div>
  {/each}
</div>

<style>
  .poll_list {
    /* background-color: blue; */
    text-align: center;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
</style>
