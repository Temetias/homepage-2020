<script>
  import {
    getAuthor,
    getAuthorImg,
    getAuthorLink
  } from "../routes/blog/_author.js";

  export let post;
</script>

<style>
  header {
    margin-bottom: 1em;
  }
  a {
    font-weight: 600;
  }
  span {
    color: rgba(0, 0, 0, 0.6);
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
  .divider,
  .divider-dot {
    display: inline !important;
  }
  @media (max-width: 480px) {
    .divider {
      display: block !important;
    }
    .divider-dot {
      display: none !important;
      color: red;
    }
  }
</style>

<header>
  <div class="post-info">
    <img src={getAuthorImg(post)} alt={getAuthor(post)} />
    <div class="post-info-inner">
      <a href={getAuthorLink(post)}>{getAuthor(post)}</a>
      <span>
        <span class="divider">{new Date(post.date).toLocaleDateString()}</span>
        <span class="divider-dot">•</span>
        <span class="divider">{post.readTime} min read</span>
      </span>
    </div>
  </div>
</header>
