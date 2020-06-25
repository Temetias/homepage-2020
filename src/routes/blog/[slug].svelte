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
  import BlogPostHeader from "../../components/BlogPostHeader.svelte";

  export let post;
</script>

<style>

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<BlogPostHeader {post} />
<div class="content">
  {@html post.content}
</div>
