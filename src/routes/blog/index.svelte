<script>
  import Clipper from "../../components/Clipper.svelte";
  import posts from "./_posts.js";
  import BlogPostHeader from "../../components/BlogPostHeader.svelte";
</script>

<style>
  ul {
    margin: 2em 0 1em 0;
    line-height: 1.5;
    padding: 0;
  }
  li {
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 0.5em 2.5em;
  }
  li:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 480px) {
    li {
      padding: 0.3em 1.5em;
    }
    li footer {
      padding: 0 1em;
    }
  }
  li footer {
    margin: 0em -1.5em 0.5em -1.5em;
    display: flex;
    justify-content: flex-end;
  }
</style>

<svelte:head>
  <title>Teemu Karppinen - Blog</title>
</svelte:head>

<header>
  <h1>The Blog</h1>
  <span>
    Nuggets of knowledge, ramblings of a dev and maybe someday some content from
    friends too!
  </span>
</header>

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
      <BlogPostHeader {post} />
      <footer>
        <Clipper link="/blog/{post.slug}" />
      </footer>
    </li>
  {/each}
</ul>
