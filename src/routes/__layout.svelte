<!-- __layout.svelte -->
<script lang="ts"
        context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname;
    return {
      props: {
        currentRoute,
      },
    };
  };
</script>

<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "$lib/styles/gruvbox-theme.scss";
  import "$lib/styles/style.scss";
  import { fade } from "svelte/transition";

  export let currentRoute;
</script>
<Header />

{#key currentRoute}
  <main in:fade={{duration: 150, delay: 150}}
        out:fade={{duration: 150}}>
    <slot />
  </main>
{/key}

<Footer />