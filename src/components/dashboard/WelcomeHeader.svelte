<script lang="ts">
  type Props = {
    username?: string;
  };

  let { username = "user" }: Props = $props();
</script>

<div class="welcome">
  <h1>Good evening, <span class="highlight">{username}</span>.</h1>
  <p>Every small decision builds your legacy.</p>
</div>

<style>
  .welcome h1 {
    font-size: var(--fs-2xl);
    font-weight: var(--fw-semibold);
    margin: 0 0 8px 0;
    color: var(--text-main);
  }

  .highlight {
    color: var(--accent-secondary);
  }

  .welcome p {
    font-size: var(--fs-sm);
    color: var(--text-muted);
    margin: 0;
  }
</style>
