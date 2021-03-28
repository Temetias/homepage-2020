<script>
import Icon from "fa-svelte";
import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch";
export let twitchData;
</script>

<style>
.twitch-popup {
  background-color: #201c2b;
  border: none;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, .3), -8px -8px 8px 0 rgba(255, 255, 255, .7);
  border-radius: 1em;
  display: flex;
  position: absolute;
  top: -8%;
  left: 50%;
  margin: 0;
  text-align: left;
  padding: .4rem 1rem 0rem 1rem;
  animation: pop .15s;
}
.twitch-popup a {
  color: #e2dbf0;
}
.twitch-popup h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  padding: .2rem 0;
  color: #e5e3e8;
}
.twitch-icon {
  color: #6441a5;
  font-size: 2.5rem;
  margin: 0;
  padding: 0 1rem 0 0;
  position: relative;
}
@media (max-width: 480px) {
  .twitch-popup h3 {
    font-size: 1rem;
  }
  .twitch-popup a {
    font-size: 1rem;
  }
  .twitch-popup {
    left: 40%;
    padding-top: .8em;
  }
}
@media (max-width: 395px) {
  .twitch-popup {
    left: 30%;
  }
}
@keyframes pop {
  from {
    opacity: 0;
    transform: scale(.6);
  } to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

{#if twitchData && twitchData.is_live}
<dialog class="twitch-popup" open="true">
  <div class="twitch-icon">
    <Icon icon={faTwitch} aria-hidden="true"/>
  </div>
  <div>
    <h3>Hey, I'm live!</h3>
    <a href="https://twitch.tv/teemukarppinen">Come say hi!</a>
  </div>
</dialog>
{/if}