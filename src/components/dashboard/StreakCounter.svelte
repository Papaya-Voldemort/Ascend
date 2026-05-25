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
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: var(--radius-md);
  }

  .stats {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .number {
    font-size: var(--fs-xl);
    font-weight: var(--fw-bold);
    color: var(--text-main);
    line-height: 1;
  }

  .label {
    font-size: var(--fs-xs);
    font-weight: var(--fw-bold);
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }
</style>
