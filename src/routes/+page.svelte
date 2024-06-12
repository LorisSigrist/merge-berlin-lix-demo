<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
</script>

<h1>Your name is <i>{m.your_name()}</i></h1>

<style>
  :global(html, body) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
  }

  :global(body) {
    display: grid;
    place-items: center;
  }
</style>
