<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import { routes } from './routes';

    import Comic from "./pages/Comic.svelte";

</script>

<Router>
    {#each routes as { path, component } }
        <Route path={path} component={component} />
    {/each}
    <Route path={'/comic'} component={Comic} />
</Router>