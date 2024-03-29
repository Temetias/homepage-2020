<script>
  import TextBlock from "../components/TextBlock.svelte";
  import TwitchPopUp from "../components/TwitchPopUp.svelte";
  import { onMount } from "svelte";

  function years(from, isAge = false) {
    const computedDiff = new Date(new Date().getTime() - new Date(from).getTime());
    return isAge
      ? computedDiff.getFullYear() - 1970
      : computedDiff.getFullYear() - (computedDiff.getMonth() < 5 ? 1970 : 1969);
  }

  let twitchData;

  onMount(() => fetch("https://api.teemukarppinen.dev/twitch/livestatus")
    .then(response => response.json())
    .then(jsonResponse => twitchData = jsonResponse)
    .catch(console.error));
</script>

<style>
  figure {
    position: relative;
    text-align: center;
    margin: 0 auto 8.5em auto;
    max-width: 90vw;
  }
  h1,
  figcaption {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2em;
  }
  h1 {
    font-size: 4em;
    margin: 1em 0 0.2em 0;
  }
  figcaption {
    display: inline-block;
    border-top: 2px solid black;
    padding-top: 0.5em;
  }
  img,
  .img-border {
    border-radius: 50%;
    max-width: 100%;
  }
  img {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20em;
    max-width: calc(100% - 6px);
    margin: 0;
    border: none;
    box-shadow: none;
  }
  .img-wrap {
    display: inline-block;
    position: relative;
    width: calc(6px + 20em);
    max-width: 100%;
  }
  .img-border {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    background: linear-gradient(
      to bottom right,
      #ffffff,
      #ff614d,
      #ff2a0e,
      #ff0000
    );
    box-shadow: 12px 12px 12px 0px rgba(0, 0, 0, 0.3),
      -12px -12px 12px 0px rgba(255, 255, 255, 0.7);
  }
  i {
    font-style: normal;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 2em;
    }
    figcaption {
      font-size: 1em;
    }
  }
</style>

<svelte:head>
  <title>Teemu Karppinen</title>
</svelte:head>

<figure>
  <div class="img-wrap">
    <div class="img-border">
      <img alt="My face" src="me2.jpg" />
    </div>
  </div>
  <TwitchPopUp twitchData={twitchData} />
  <h1>Teemu Karppinen</h1>
  <figcaption>Fullstack developer, boulderer, sim racer</figcaption>
</figure>

<article>
  <TextBlock>
    <h2 id="i-am" slot="title">
      <i aria-hidden="true">👦</i>
      I am
    </h2>
    <p>
      a fullstack developer from Joensuu, Finland. I am {years('April 5, 1994 00:00:00', true)}
      years old and I have been doing different kinds of development for {years('August 1, 2015 00:00:00')}
      years. During those {years('August 1, 2015 00:00:00')} years I have
      studied in the university, worked professionally for {years('November 1, 2017 00:00:00')}
      years and spent countless hours continuously learning and expanding my
      skillset. I'm currently working as a Software Architect at <a href="https://www.processgenius.fi/fi/">Process Genius</a>.
    </p>
  </TextBlock>
  <TextBlock>
    <h2 id="my-skillset" slot="title">
      <i aria-hidden="true">💻</i>
      My skillset
    </h2>
    <p>
      is mainly focused on fullstack web development. On the frontend I have tried and used tons of different
      tools and technologies and generally can work with all of them. On the backend I have used a large variety of
      technologies ranging from Node.js to PHP and Linux VM's to Azure. My preferred paradigm in programming is
      functional and I use static typing whenever possible. I've also gathered a lot of experience
      in working directly with clients through the process of building and maintaining software.
    </p>
  </TextBlock>
  <TextBlock>
    <h2 id="i-enjoy" slot="title">
      <i aria-hidden="true">😍</i>
      I enjoy
    </h2>
    <p>
      experimenting with functional languages like Haskell and trying to bend
      the limits of JavaScript's and TypeScript's FP cabapilities. I also like
      replicating "poor man's versions" of common frameworks and libraries in
      hopes of gaining a deeper understanding of the tools we use to build
      stuff.
    </p>
  </TextBlock>
  <TextBlock>
    <h2 id="to-stay-in-shape" slot="title">
      <i aria-hidden="true">🧗‍♂️</i>
      In my freetime
    </h2>
    <p>
      I go bouldering, snowboarding and ride my MTB. I'm also a passionate sim racer. You can maybe catch me streaming
      sim racing on <a href="https://www.twitch.tv/teemukarppinen">my Twitch channel</a> every now and then.
    </p>
  </TextBlock>
</article>
