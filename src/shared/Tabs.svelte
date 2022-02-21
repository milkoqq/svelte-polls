<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let itemTabs;
  export let activeTab;
</script>

<div class="tabs-wrapper">
  <ul class="tabs-component flex">
    {#each itemTabs as tab}
      <li
        on:click={() => {
          dispatch("changeTab", tab);
        }}
      >
        <div class:active={tab === activeTab}>
          {tab}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs-component {
    list-style-type: none;
    justify-content: center;
  }

  .tabs-component li {
    padding: 1rem;
    cursor: pointer;
  }
  .active {
    color: red;
    border-bottom: 1px solid red;
  }
</style>
