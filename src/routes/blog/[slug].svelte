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

  function idFy(str) {
    return str
      .toLowerCase()
      .split(" ")
      .join("-");
  }
</script>

<style>
  h1 {
    margin-bottom: 1em;
  }
  .content {
    margin: 2em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1 id={idFy(post.title)}>{post.title}</h1>
<BlogPostHeader {post} />
<div class="content">
  {@html post.content}
</div>
