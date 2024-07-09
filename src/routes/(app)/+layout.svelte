<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Info from '$lib/components/Info.svelte';
</script>

<Info />
<Header />

<slot></slot>

<footer>Hey there, I'm using What's up!</footer>

<style>
	footer {
		margin-left: 350px;
	}
</style>
