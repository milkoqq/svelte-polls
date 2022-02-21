<script>
  import Button from "../shared/Button.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let pollData = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const addPoll = () => {
    valid = true;

    if (pollData.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be more than 5 chars";
    } else {
      errors.question = "";
    }

    if (pollData.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer must be at least 1 char";
    } else {
      errors.answerA = "";
    }

    if (pollData.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer must be at least 1 char";
    } else {
      errors.answerB = "";
    }

    if (valid) {
      console.log("VALIIDDDD", pollData);
      let poll = {
        ...pollData,
        votesA: "",
        votesB: "",
        id: Math.floor(Math.random() * 10),
      };
      console.log(poll);
      dispatch("add", poll);
    }
  };
</script>

<form on:submit|preventDefault={addPoll}>
  <div class="form-field">
    <label for="question">Add the question</label>
    <input
      type="text"
      name="question"
      id="question"
      placeholder="Your question goes here"
      bind:value={pollData.question}
    />
    <div class="error">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="answerA">Answer A</label>
    <input
      type="text"
      name="answerA"
      id="answerA"
      placeholder="Answer A goes here"
      bind:value={pollData.answerA}
    />
    <div class="error">{errors.answerA}</div>
  </div>

  <div class="form-field">
    <label for="answerB">Answer B</label>
    <input
      type="text"
      name="answerB"
      id="answerB"
      placeholder="Answer B goes here"
      bind:value={pollData.answerB}
    />
    <div class="error">{errors.answerB}</div>
  </div>

  <Button type="primary" flat={false} inverse={false}>Add Poll</Button>
  <!-- <button>Add Poll</button> -->
</form>

<style>
  form {
    text-align: center;
  }
  label {
    font-weight: bold;
    margin-top: 1rem;
  }
  input {
    width: min(30em, 100%);
    margin-top: 0.5rem;
  }
  .error {
    font-weight: bold;
    margin-bottom: 1rem;
    color: red;
  }
</style>
