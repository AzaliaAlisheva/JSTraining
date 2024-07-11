<script lang="ts">
	import { base } from '$app/paths';
	import BackHeader from '$lib/components/BackHeader.svelte';
</script>

<BackHeader backHref="{base}/labs" />

<svelte:head>
  <link rel="icon" href="../favicon.png">
</svelte:head>

<slot></slot>

<footer>Hey there, I'm using What's up!</footer>

<style>
	footer {
		margin-left: 0;
	}
</style>
