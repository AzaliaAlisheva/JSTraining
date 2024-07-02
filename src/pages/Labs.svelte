<script lang="ts">
    import { onMount } from 'svelte'
    import {manageDisabled} from '../disabled'
    onMount(() => {
        manageDisabled('labsLink');
    });
</script>

<h2>Labs</h2>
<ul id="labs">
    <li><a href="comic.html">Comic</a></li>
</ul>