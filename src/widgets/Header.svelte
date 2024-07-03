<script lang="ts">
    import { Link } from 'svelte-routing';
    import { routes } from '../routes'

    export let disabledLabel = 'Home';
</script>

<header>
    <nav>
        {#each routes as {path, component, label}}
        <Link to={path} class={label === disabledLabel ? 'disabled' : ''}>
            {label}
        </Link>
        {/each}
        
        <!-- <a href="#/" id="homeLink">Home</a>
        <a href="#/about" id="aboutLink">About Me</a>
        <a href="#/photos" id="photosLink">Photos</a>
        <a href="#/portfolio" id="portfolioLink">Portfolio</a>
        <a href="#/labs" id="labsLink">Labs</a> -->
    </nav>
</header>