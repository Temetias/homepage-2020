<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 8vh auto 0 auto;
    box-sizing: border-box;
  }
  @media (max-width: 769px) {
    main {
      margin: 4vh auto 0 auto;
    }
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
