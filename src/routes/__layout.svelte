<!-- __layout.svelte -->
<script lang="ts">
  import Header from "$lib/components/Header.svelte";
</script>
<Header />

<main>
  <slot />
</main>

<footer>Goodbye, I'm the footer.</footer>