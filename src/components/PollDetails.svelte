<script>
  export let poll;
  $: totalVotes = poll.votesA + poll.votesB;
</script>

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
    <div class="answer answerA">
      {poll.answerA}
      <span class="votesA">({poll.votesA})</span>
    </div>
    <div class="answer answerB">
      {poll.answerB}
      <span class="votesB">({poll.votesB})</span>
    </div>
  </div>
</div>

<style>
  .poll_wrapper {
    padding: 1rem;
    background-color: beige;
  }
  .poll_question {
    font-weight: bold;
  }
  .answer_wrapper {
    margin-top: 1rem;
  }
  .answer {
    padding: 1rem;
    margin: 8px;
    background-color: #edf2f0;
  }
</style>
