<script lang="ts">
    import { Link } from 'svelte-routing';

    import Header from "../widgets/Header.svelte";
    import Info from "../widgets/Info.svelte";
</script>

<Info />
<Header disabledLabel="Labs"/>
<main>
    <h2>Labs</h2>
    <ul id="labs">
        <li><Link to="/comic">Comic</Link></li>
    </ul>
</main>