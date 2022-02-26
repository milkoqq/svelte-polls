<script>
  import PollDetails from "./PollDetails.svelte";
  import Polls from "../stores/PollStore.js";
</script>

<div class="poll_list">
  {#each $Polls as poll (poll.id)}
    <div><PollDetails {poll} /></div>
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
