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
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #ffffff;
  }

  .highlight {
    color: #7c3aed;
  }

  .welcome p {
    font-size: 0.95rem;
    color: #6b7280;
    margin: 0;
  }
</style>
