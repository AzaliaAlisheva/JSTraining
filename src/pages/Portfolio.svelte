<script lang="ts">
    import { onMount } from 'svelte'
    import { manageDisabled } from '../disabled'

    import TeamProjects from '../widgets/TeamProjects.svelte';
    import PersonalProjects from '../widgets/PersonalProjects.svelte';

    onMount(() => {
        manageDisabled('portfolioLink');
    });
</script>

<TeamProjects />
<PersonalProjects />
