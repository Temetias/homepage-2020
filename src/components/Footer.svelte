<script>
  import Icon from "fa-svelte";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
  import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch";
  import { onMount } from "svelte";

  function formatDate(date) {
    return `${new Intl.DateTimeFormat("en", { month: "long" }).format(date)} ${date.getFullYear()}`;
  }

  let lastUpdate;

 /*  onMount(async () => {
    await fetch("https://api.github.com/repos/Temetias/Temetias.github.io/commits/master")
      .then(r => r.json())
      .then(({ commit }) => lastUpdate = formatDate(new Date(commit.author.date)))
  }); */
</script>

<style>
  footer {
    max-width: 56em;
    padding: 0 2em 2em 2em;
    margin: 8vh auto 0 auto;
    text-align: center;
  }
  li {
    display: block;
  }
  .socials {
    text-align: start;
    padding-left: 0;
    margin-bottom: 3em;
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
  .last-update {
    color: #585555;
  }
</style>

<footer>
  <ul class="socials">
    <li>
      <a href="https://github.com/Temetias">
        <Icon icon={faGithub} aria-hidden="true" />
        /Temetias
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Temetias">
        <Icon icon={faTwitter} aria-hidden="true" />
        @Temetias
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/teemu-karppinen-1174b1139/">
        <Icon icon={faLinkedin} aria-hidden="true" />
        Teemu Karppinen
      </a>
    </li>
    <li>
      <a href="https://twitch.tv/teemukarppinen">
        <Icon icon={faTwitch} aria-hidden="true" />
        /teemukarppinen
      </a>
    </li>
  </ul>
    <span class="last-update">{#if lastUpdate}Page last updated: {lastUpdate}{/if}</span>
</footer>
