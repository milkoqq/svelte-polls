import {writable} from 'svelte/store'

const Polls = writable([
    {
      question: "What do you prefer?",
      answerA: "Spaghetti",
      answerB: "Burgers",
      votesA: 459,
      votesB: 22,
      id: 1,
    },
    {
      question: "Where do you come from?",
      answerA: "Burgers",
      answerB: "Pizza",
      votesA: 459,
      votesB: 22,
      id: 2,
    },
  ]);

  export default Polls
