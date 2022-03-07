<!-- __layout.svelte -->
<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "$lib/styles/gruvbox-theme.scss";
  import "$lib/styles/style.scss";
</script>
<Header />

<main>
  <slot />
</main>

<Footer />