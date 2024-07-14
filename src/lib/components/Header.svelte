<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<a href="{base}/" class={$page.url.pathname == `${base}/` ? 'disabled' : ''}>Home</a>
		<a href="{base}/about" class={$page.url.pathname == `${base}/about` ? 'disabled' : ''}>About</a>
		<a href="{base}/photos" class={$page.url.pathname == `${base}/photos` ? 'disabled' : ''}
			>Photos</a
		>
		<a href="{base}/portfolio" class={$page.url.pathname == `${base}/portfolio` ? 'disabled' : ''}
			>Portfolio</a
		>
		<a href="{base}/labs" class={$page.url.pathname == `${base}/labs` ? 'disabled' : ''}>Labs</a>
	</nav>
</header>
