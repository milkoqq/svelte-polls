<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import AddPollForm from "./components/AddPollForm.svelte";

  let itemTabs = ["Current Polls", "Add Poll"];
  let activeTab = "Add Poll";
  let poll;
  let polls = [
    {
      question: "What do you prefer?",
      answerA: "Spaghetti",
      answerB: "Burgers",
      votesA: "459",
      votesB: "22",
      id: 1,
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
</script>

<Header />
<main>
  <Tabs {itemTabs} {activeTab} on:changeTab={changeTab} />
  {#if activeTab === "Current Polls"}
    show me some love
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
