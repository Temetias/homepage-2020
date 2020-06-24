<script context="module">
  import posts from "./_posts.js";

  export async function preload({ params }) {
    const post = posts.filter(p => p.slug === params.slug)[0];
    if (post) {
      return { post };
    } else {
      this.error(404, "Not found");
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  :global(img) {
    display: block;
    margin-bottom: 2em;
    margin-top: 0.3em;
    max-width: calc(90% - 8em);
    border-radius: 1.5em;
    border: 2em solid #f0efef;
    box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.1),
      -6px -6px 6px 0px rgba(255, 255, 255, 0.1);
  }
  :global(h2) {
    margin-top: 1.5em;
  }
  :global(h3) {
    margin-top: 1em;
  }
  :global(h4) {
    margin-top: 0.5em;
  }
  @media (max-width: 690px) {
    :global(img) {
      max-width: calc(100% - 2em);
      border: 1em solid #f0efef;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="content">
  {@html post.content}
</div>
