<script>
  import Polls from "../stores/PollStore.js";
  import Button from "../shared/Button.svelte";
  import Card from "../shared/Card.svelte";

  export let poll;

  const handleVote = (option, id) => {
    Polls.update((currentPolls) => {
      let poll = currentPolls.find((poll) => poll.id == id);

      if (option === "a") {
        poll.votesA++;
      } else {
        if (option === "b") {
          poll.votesB++;
        }
      }
      return currentPolls;
    });
  };

  const handleDelete = (id) => {
    Polls.update((currentPolls) => {
      currentPolls = currentPolls.filter((poll) => poll.id != id);
      return currentPolls;
    });
  };

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);
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
        <div class="percent percentA" style="width: {percentA}%" />
        <span class="votesA">({poll.votesA})</span>
      </div>
      <div class="answer answerB" on:click={() => handleVote("b", poll.id)}>
        {poll.answerB}
        <span class="percent percentB" style="width: {percentB}%" />

        <span class="votesB">({poll.votesB})</span>
      </div>
    </div>
    <Button type="secondary" flat={true} on:click={() => handleDelete(poll.id)}
      >Delete</Button
    >
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
    position: relative;
    background-color: #edf2f0;
  }
  .answer:hover {
    opacity: 0.8;
  }

  .percent {
    height: 100%;
    position: absolute;
    left: 0%;
    top: 0%;
  }

  .percent.percentA {
    background-color: rgba(193, 66, 66, 0.41);
  }

  .percent.percentB {
    background-color: rgba(63, 191, 65, 0.41);
  }
</style>
