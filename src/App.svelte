<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import AddPollForm from "./components/AddPollForm.svelte";
  import PollList from "./components/PollList.svelte";

  let itemTabs = ["Current Polls", "Add Poll"];
  let activeTab = "Current Polls";
  let poll;
  let polls = [
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
  ];

  const changeTab = (e) => {
    activeTab = e.detail;
  };

  const AddPollToList = (e) => {
    poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeTab = "Current Polls";
  };

  const handleVote = (e) => {
    const { option, id } = e.detail;
    let poll = polls.find((poll) => poll.id == id);

    if (option === "a") {
      poll.votesA++;
    } else {
      if (option === "b") {
        poll.votesB++;
      }
    }
    polls = polls;
  };
</script>

<Header />
<main class="">
  <Tabs {itemTabs} {activeTab} on:changeTab={changeTab} />
  {#if activeTab === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeTab === "Add Poll"}
    <AddPollForm on:add={AddPollToList} />
  {/if}
</main>

<!-- <Footer /> -->
<style>
  main {
    /* width: 80%;
	max-width: 50rem; */
    width: min(60%, 500rem);
    margin: 0 auto;
  }
</style>
