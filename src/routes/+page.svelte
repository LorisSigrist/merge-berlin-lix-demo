<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
</script>


<h1>Your name is {m.your_name()}</h1>

<style>
    :global(html, body) {
        position: fixed; 
        inset: 0;
    }

    :global(body) {
        display: grid;
        place-items: center;
    }
</style>