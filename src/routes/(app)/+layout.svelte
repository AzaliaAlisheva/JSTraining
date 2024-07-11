<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Info from '$lib/components/Info.svelte';
</script>

<svelte:head>
	<link rel="icon" href="favicon.png">
  	<title>Azalia Alisheva CV</title>
  	<meta name="description" content="Welcome to Azalia Alisheva's Portfolio Website. Bachelor Innopolis University student passionate about software engineering and technology. Explore my projects and skills." />
</svelte:head>

<Info />
<Header />

<slot></slot>

<footer>Hey there, I'm using What's up!</footer>

<style>
	footer {
		margin-left: 350px;
	}
</style>
