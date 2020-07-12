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
  .blog-disclaimer {
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    padding: 2em 0;
    margin-top: 5em;
    font-weight: 600;
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
<div class="blog-disclaimer">
  <span>
    Hey! If you're looking for a comment section I'm sorry to disappoint you: I
    haven't had time to make one yet. 🤐 But if you wanna call me out on my
    bull💩, just ping me
    <a href="https://twitter.com/Temetias">@Twitter</a>
    meanwhile!
  </span>
</div>
