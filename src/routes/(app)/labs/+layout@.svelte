<script lang="ts">
	import BackHeader from '$lib/components/BackHeader.svelte';
</script>

<BackHeader backHref="\labs" />

<slot></slot>

<footer>Hey there, I'm using What's up!</footer>

<style>
	footer {
		margin-left: 0;
	}
</style>
