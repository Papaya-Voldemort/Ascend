<script lang="ts">
  import SidebarNavigation from "./components/layout/SidebarNavigation.svelte";
  import WelcomeHeader from "./components/dashboard/WelcomeHeader.svelte";
  import StreakCounter from "./components/dashboard/StreakCounter.svelte";

  // Import state
  import { analytics } from "$lib/stores/state";
  import RankProgressCard from "./components/dashboard/RankProgressCard.svelte";
</script>

<main class="dashboard-container">
  <aside class="sidebar-area">
    <SidebarNavigation />
  </aside>

  <section class="content-area">
    <header class="header-row">
      <WelcomeHeader username="focusmode" />
      <StreakCounter count={$analytics.currentStreak} />
    </header>

    <div class="dashboard-grid">
      <div class="rank-card">
        <RankProgressCard />
      </div>

      <div class="placeholder-card">Missions Coming Soon...</div>
      <div class="placeholder-card">Momentum Coming Soon...</div>
    </div>
  </section>
</main>

<style>
  /* --- Global Resets & Theme Base --- */
  :global(body) {
    background-color: #0d0e12;
    color: #f3f4f6;
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* --- Dashboard Main Core Layout --- */
  .dashboard-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  /* --- Fixed Left Sidebar Area --- */
  .sidebar-area {
    width: 240px;
    min-width: 240px;
    background-color: #12131a;
    border-right: 1px solid #1f222f;
  }

  /* --- Dynamic Right Content Area --- */
  .content-area {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow-x: hidden;
  }

  /* --- Top Header Row --- */
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  /* --- Grid System --- */
  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
    width: 100%;
  }

  /* Forces Rank Progress to take up row 1 entirely */
  .rank-card {
    grid-column: 1 / -1;
    grid-row: 1;
    width: 100%;
  }

  /* Forces the first placeholder ("Missions") to row 2, column 1 (2fr wide) */
  .placeholder-card:nth-of-type(1) {
    grid-column: 1;
    grid-row: 2;
  }

  /* Forces the second placeholder ("Momentum") to row 2, column 2 (1fr wide) */
  .placeholder-card:nth-of-type(2) {
    grid-column: 2;
    grid-row: 2;
  }

  /* --- Sub-Card Elements styling --- */
  .placeholder-card {
    background-color: #161722;
    border: 1px solid #23263b;
    border-radius: 12px;
    padding: 24px;
    color: #4b5563;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
</style>
