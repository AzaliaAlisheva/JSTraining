<script lang="ts">
	import { page } from '$app/stores';
	// export let disabledLabel = 'Home';
</script>

<header>
	<nav>
		<a href="/" class={$page.url.pathname == '/' ? 'disabled' : ''}>Home</a>
		<a href="/about" class={$page.url.pathname == '/about' ? 'disabled' : ''}>About</a>
		<a href="/photos" class={$page.url.pathname == '/photos' ? 'disabled' : ''}>Photos</a>
		<a href="/portfolio" class={$page.url.pathname == '/portfolio' ? 'disabled' : ''}>Portfolio</a>
		<a href="/labs" class={$page.url.pathname == '/labs' ? 'disabled' : ''}>Labs</a>
	</nav>
</header>
