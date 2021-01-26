<script>
  import Icon from "fa-svelte";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
  import { onMount } from "svelte";

  onMount(async () => {
    await fetch("https://api.github.com/repos/Temetias/Temetias.github.io/commits/master")
      .then(r => r.json())
      .then(({ commit }) => console.log(new Date(commit.author.date)));
  });
</script>

<style>
  li {
    display: block;
  }
  .socials a {
    font-size: 1.4em;
  }
  a :global(svg) {
    transform: translateY(0.15em);
  }
  a {
    text-decoration: none;
    line-height: 2em;
  }
  @media (min-width: 661px) {
    .socials {
      display: none;
    }
  }
</style>

<footer>
  <ul class="socials">
    <li>
      <a href="https://github.com/Temetias">
        <Icon icon={faGithub} />
        /Temetias
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Temetias">
        <Icon icon={faTwitter} />
        @Temetias
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/teemu-karppinen-1174b1139/">
        <Icon icon={faLinkedin} />
        Teemu Karppinen
      </a>
    </li>
  </ul>
  <span>Page last updated: </span>
</footer>
