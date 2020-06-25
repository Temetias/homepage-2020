<style>
  .text-block {
    margin: 0 0 4em 0;
  }
  .text-block :global(*) {
    display: inline;
    margin: 0;
  }
</style>

<div class="text-block">
  <slot name="title" />
  <slot />
</div>
