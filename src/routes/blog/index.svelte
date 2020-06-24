<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import posts from "./_posts.js";
  console.log(posts);
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  li {
    display: block;
  }
  span {
    display: block;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <h2>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </h2>
      <span>{new Date(post.date).toLocaleDateString()}</span>
      <span>{post.readTime} minute read</span>
    </li>
  {/each}
</ul>
