<script lang="ts">
  import Icon from "@iconify/svelte";

  type Props = {
    count?: number;
  };

  let { count = 0 }: Props = $props();

  let flameColor = $derived(count > 0 ? "#ea580c" : "#6b7280");
</script>

<div class="streak-badge" style="color: {flameColor}">
  <Icon icon="lucide:flame" width="24" height="24" />
  <div class="stats">
    <span class="number">{count}</span>
    <span class="label">DAY STREAK</span>
  </div>
</div>

<style>
  .streak-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: #161722;
    border: 1px solid #23263b;
    padding: 8px 16px;
    border-radius: 12px;
  }

  .stats {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .number {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 1;
  }

  .label {
    font-size: 0.65rem;
    font-weight: 700;
    color: #6b7280;
    letter-spacing: 0.05em;
  }
</style>
