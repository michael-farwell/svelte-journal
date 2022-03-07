<!-- Header.svelte -->
<header>
  <a href="/">HOME</a>

  <nav>
    <ul>
      <li><a href="/blog">BLOG</a></li>
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/contact">CONTACT</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    padding: 1rem;
    background: lightgray;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>