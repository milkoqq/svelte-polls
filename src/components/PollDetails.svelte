<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Card from "../shared/Card.svelte";
  export let poll;
  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
  };

  $: totalVotes = poll.votesA + poll.votesB;
</script>

<Card>
  <div class="poll_wrapper">
    <div class="poll_question">{poll.question}</div>
    <div class="poll_total-votes">
      {#if totalVotes > 0}
        Total Votes: {totalVotes}
      {:else}
        Total Votes: No votes yet.
      {/if}
    </div>
    <div class="answer_wrapper">
      <div class="answer answerA" on:click={() => handleVote("a", poll.id)}>
        {poll.answerA}
        <span class="votesA">({poll.votesA})</span>
      </div>
      <div class="answer answerB" on:click={() => handleVote("b", poll.id)}>
        {poll.answerB}
        <span class="votesB">({poll.votesB})</span>
      </div>
    </div>
  </div>
</Card>

<style>
  .poll_wrapper {
    border-radius: 8px;
    padding: 1rem;
  }
  .poll_question {
    font-weight: bold;
  }
  .answer_wrapper {
    margin-top: 1rem;
  }
  .answer {
    cursor: pointer;
    padding: 1rem;
    margin: 8px;
    background-color: #edf2f0;
  }
  .answer:hover {
    opacity: 0.8;
  }
</style>
