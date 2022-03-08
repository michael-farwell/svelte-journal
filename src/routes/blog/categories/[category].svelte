<!-- [category].svelte -->
<script lang="ts"
        context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category;
    const response = await fetch("/api/posts.json");
    const posts = await response.json();
    const matchingPosts = posts.filter(post => post.meta.categories.includes(currentCategory));
    return {
      props: {
        posts: matchingPosts,
        category: currentCategory,
      },
    };
  };
</script>

<script lang="ts">
  export let posts;
  export let category;
</script>

<h1>Blog [{category}]</h1>
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