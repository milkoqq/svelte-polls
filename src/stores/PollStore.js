import {writable} from 'svelte/store'

const Polls = writable([
    {
      question: "What do you prefer?",
      answerA: "Spaghetti",
      answerB: "Burgers",
      votesA: 9,
      votesB: 5,
      id: 1,
    },
    {
      question: "Where do you come from?",
      answerA: "Burgers",
      answerB: "Pizza",
      votesA: 4,
      votesB: 2,
      id: 2,
    },
  ]);

  export default Polls
