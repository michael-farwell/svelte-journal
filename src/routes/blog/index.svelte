<!-- blog/index.svelte -->
<script lang="ts"
        context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script lang="ts">
  export let posts;
</script>

<h1>Blog</h1>
<hr>
<ul>
  {#each posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published: {post.meta.date}
    </li>
  {/each}
</ul>