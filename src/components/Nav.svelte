<script>
  import Icon from "fa-svelte";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

  export let segment;
</script>

<style>
  .nav-wrap {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: stretch;
    width: 100vw;
    max-width: 1200px;
  }
  nav {
    font-weight: 500;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  ul {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }
  li {
    padding: 0 1em;
    display: block;
  }
  a {
    font-size: 1.2em;
  }
  nav a {
    text-decoration: none;
    text-transform: capitalize;
  }
  nav a::before {
    content: "<";
    margin-right: 1px;
  }
  nav a::after {
    content: "/>";
    margin-left: 1px;
  }
  nav a[aria-current] {
    color: red;
  }
  .socials {
    padding-right: 2em;
  }
  .socials a {
    font-size: 1.6em;
  }
  @media (max-width: 660px) {
    .socials {
      display: none;
    }
    .nav-wrap {
      justify-content: center;
    }
    ul {
      padding: 0;
      justify-content: center;
    }
  }
  @media (max-width: 480px) {
    a {
      font-size: 1em;
    }
  }
</style>

<div class="nav-wrap">
  <nav>
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          TK
        </a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          about
        </a>
      </li>
      <li>
        <a aria-current={segment === 'blog' ? 'page' : undefined} href="blog">
          blog
        </a>
      </li>
    </ul>
  </nav>
  <ul class="socials">
    <li>
      <a href="https://github.com/Temetias" aria-label="My github">
        <Icon icon={faGithub} />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Temetias" aria-label="My twitter">
        <Icon icon={faTwitter} />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/teemu-karppinen-1174b1139/"
        aria-label="My linkedin">
        <Icon icon={faLinkedin} />
      </a>
    </li>
  </ul>
</div>
