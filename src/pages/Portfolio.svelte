<script lang="ts">
    import Header from "../widgets/Header.svelte";
    import Info from "../widgets/Info.svelte";

    import TeamProjects from '../widgets/TeamProjects.svelte';
    import PersonalProjects from '../widgets/PersonalProjects.svelte';
</script>

<Info />
<Header disabledLabel="Portfolio"/>
<main>
    <TeamProjects />
    <PersonalProjects />
</main>
