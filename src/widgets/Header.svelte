<script lang="ts">
    import { Link } from 'svelte-routing';
    import { routes } from '../routes'

    export let disabledLabel = 'Home';
</script>

<header>
    <nav>
        {#each routes as {path, label}}
        <Link to={path} class={label === disabledLabel ? 'disabled' : ''}>
            {label}
        </Link>
        {/each}
    </nav>
</header>