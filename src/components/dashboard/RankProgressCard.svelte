<script>
  import { user, analytics } from "$lib/stores/state";
  import { getRankByLevel } from "$lib/ranks";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { animate } from "motion";

  $: currentRank = getRankByLevel($analytics.currentRank || 1);

  // Dynamic variables
  let currentXp = 1420;
  let totalXp = 2500;
  let nextRank = "Master II";

  $: remainingXp = totalXp - currentXp;
  $: progressPercentage = (currentXp / totalXp) * 100;

  let progressBarRef;

  // Motion One Animation
  $: if (progressBarRef) {
    animate(
      progressBarRef,
      { width: `${progressPercentage}%` },
      { duration: 0.8, easing: [0.25, 1, 0.5, 1] },
    );
  }
</script>

<div class="card">
  <div class="left">
    <div class="rankBadge">
      <img src={currentRank.icon} alt={currentRank.name} />
    </div>
    <div class="rankText">
      <span class="label">CURRENT RANK</span>
      <h1 class="rank-name">{currentRank.name}</h1>
      <span class="percentage">Top 2.4% of users</span>
      <button class="details-btn">
        View Rank Details
        <Icon icon="lucide:arrow-right" width="16" height="16" />
      </button>
    </div>
  </div>

  <div class="divider"></div>

  <div class="right">
    <div class="xp-container">
      <div class="xp-text">
        <span class="current-xp">{currentXp.toLocaleString()}</span>
        <span class="total-xp">/ {totalXp.toLocaleString()} XP</span>
      </div>

      <div class="progress-track">
        <div
          bind:this={progressBarRef}
          class="progress-fill"
          style="width: 0%;"
        ></div>
      </div>

      <span class="remaining-text">
        {remainingXp.toLocaleString()} XP until {nextRank}
      </span>
    </div>
  </div>
</div>

<style>
  /* --- Master Card Layout --- */
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    background-color: var(--bg-card, #0b0b0f);
    border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
    border-radius: var(--radius-md, 16px);
    padding: 32px;
    color: var(--text-dim, #9ca3af);
    width: 100%;
    max-width: 900px; /* Adapts beautifully from wide to compact containers */
    box-sizing: border-box;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
  }

  /* --- Left Section (Rank) --- */
  .left {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
  }

  .rankBadge img {
    width: clamp(5rem, 10vw, 7.5rem);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 15px rgba(147, 51, 234, 0.15));
  }

  .rankText {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align text left to match image */
    gap: 0.25rem;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #4b5563;
  }

  .rank-name {
    font-size: 1.75rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .percentage {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
  }

  /* --- Button --- */
  .details-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #111116;
    border: 1px solid rgba(255, 255, 255, 0.03);
    border-radius: 20px;
    padding: 0.5rem 1rem;
    color: #9ca3af;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .details-btn:hover {
    background-color: #161622;
    color: #ffffff;
  }

  /* --- Divider Line --- */
  .divider {
    width: 1px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  /* --- Right Section (XP Progress) --- */
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  .xp-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 400px;
  }

  .xp-text {
    display: flex;
    align-items: baseline;
  }

  .current-xp {
    color: #5850ec;
    font-size: 1.75rem;
    font-weight: 700;
  }

  .total-xp {
    color: #4b5563;
    font-size: 1rem;
    margin-left: 0.35rem;
  }

  /* --- Progress Bar --- */
  .progress-track {
    width: 100%;
    height: 8px;
    background-color: #15151e;
    border-radius: 9999px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background-color: #5850ec;
    border-radius: 9999px;
  }

  .remaining-text {
    font-size: 0.85rem;
    color: #4b5563;
  }
</style>
