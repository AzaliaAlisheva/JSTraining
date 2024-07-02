<script lang="ts">
    import  Router  from 'svelte-spa-router';
    import routes from './routes';

    import Info from './widgets/Info.svelte';
    import Header from './widgets/Header.svelte';

    console.log(routes);
    
</script>

<Info />
<Header />
<main>
    <Router {routes} />
</main>