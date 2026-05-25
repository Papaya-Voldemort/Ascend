<script lang="ts">
  import SidebarNavigation from "./components/layout/SidebarNavigation.svelte";
  import WelcomeHeader from "./components/dashboard/WelcomeHeader.svelte";
  import StreakCounter from "./components/dashboard/StreakCounter.svelte";

  // Import state
  import { analytics } from "$lib/stores/state";
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
      <div class="placeholder-card">Rank Card Coming Soon...</div>
      <div class="placeholder-card">Missions Coming Soon...</div>
      <div class="placeholder-card">Momentum Coming Soon...</div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    background-color: #0d0e12;
    color: #f3f4f6;
    font-family: sans-serif;
    margin: 0;
  }

  .dashboard-container {
    display: flex;
    min-height: 100vh;
  }

  .sidebar-area {
    width: 240px;
    background-color: #12131a;
    border-right: 1px solid #1f222f;
  }

  .content-area {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
  }

  .placeholder-card {
    background-color: #161722;
    border: 1px solid #23263b;
    border-radius: 12px;
    padding: 24px;
    color: #4b5563;
    min-height: 150px;
  }
</style>
