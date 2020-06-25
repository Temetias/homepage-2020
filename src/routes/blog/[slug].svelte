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

  const DEFAULT_AUTHOR = "Teemu Karppinen";
  const DEFAULT_AUTHOR_IMG = "/me2.jpg";

  function idFy(str) {
    return str
      .toLowerCase()
      .split(" ")
      .join("-");
  }

  function getAuthor(post) {
    return post.author || DEFAULT_AUTHOR;
  }

  function getAuthorImg(post) {
    return post.authorImg || DEFAULT_AUTHOR_IMG;
  }
</script>

<style>
  header {
    margin-bottom: 2em;
  }

  h1 {
    margin-bottom: 1em;
  }

  .post-info {
    display: flex;
  }

  .post-info img {
    margin: 0;
    border: 1px solid white;
    border-radius: 50%;
    width: 4em;
    height: 4em;
  }

  .post-info-inner {
    margin-left: 1em;
  }

  .post-info-inner span {
    display: block;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<header>
  <h1 id={idFy(post.title)}>{post.title}</h1>
  <div class="post-info">
    <img src={getAuthorImg(post)} alt={getAuthor(post)} />
    <div class="post-info-inner">
      <span>{getAuthor(post)}</span>
      <span>
        {new Date(post.date).toLocaleDateString()} • {post.readTime} min read
      </span>
    </div>
  </div>
</header>
<div class="content">
  {@html post.content}
</div>
