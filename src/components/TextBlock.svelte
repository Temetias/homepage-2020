<style>
  .text-block {
    margin: 0 0 4em 0;
  }
  .text-block :global(*) {
    display: inline;
  }
</style>

<div class="text-block">
  <slot name="title" />
  <slot />
</div>
