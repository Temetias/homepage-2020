<script>
  import Icon from "fa-svelte";
  import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";

  export let link;

  function copyToClip() {
    const el = document.createElement("textarea");
    el.value = window.location.host + link;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
</script>

<style>
  div {
    display: inline;
    cursor: pointer;
    transition: color 1s 1s, transform 1s 1s;
    position: relative;
  }

  div::after {
    opacity: 0;
    transition: opacity 0.5s 0.5s;
    pointer-events: none;
    display: block;
    content: "Copied!";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    color: black;
    padding: 0.1em 0.2em;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0.1em;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.05);
  }

  div:active {
    transition: color 0s 0s, transform 0s 0s;
    transform: scale(1.2);
    color: green;
  }

  div:active::after {
    transition: opacity 0s 0s;
    opacity: 1;
  }
</style>

<div on:click={copyToClip}>
  <Icon icon={faLink} />
</div>
