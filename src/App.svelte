<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import AddPollForm from "./components/AddPollForm.svelte";
  import PollList from "./components/PollList.svelte";

  let itemTabs = ["Current Polls", "Add Poll"];
  let activeTab = "Current Polls";

  const changeTab = (e) => {
    activeTab = e.detail;
  };

  const AddPollToList = (e) => {
    activeTab = "Current Polls";
  };
</script>

<Header />
<main class="">
  <Tabs {itemTabs} {activeTab} on:changeTab={changeTab} />
  {#if activeTab === "Current Polls"}
    <PollList />
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
