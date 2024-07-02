<script lang="ts">
    import { onMount } from 'svelte'
    import {manageDisabled} from '../disabled'
    onMount(() => {
        manageDisabled('photosLink');
    });
</script>

<div id="photos">
    <figure><img src="photos/lake.jpg" alt="Lake"></figure>
    <figure><img src="photos/horseriding.jpg" alt="Horseriding"></figure>
    <figure><img src="photos/UI-034.jpg" alt="IU dance class"></figure>
    <figure><img src="photos/UI-035.jpg" alt="IU dance class"></figure>
    <figure><img src="photos/bootcamp.jpg" alt="IU dance class group"></figure>
    <figure><img src="photos/classes.jpg" alt="IU bootcamp class"></figure>
    <figure><img src="photos/date2.jpg" alt="Date"></figure>
    <figure><img src="photos/date3.jpg" alt="Date"></figure>
    <figure><img src="photos/evil.jpg" alt="Evil"></figure>
    <figure><img src="photos/halloween.jpg" alt="Halloween"></figure>
    <figure><img src="photos/halloween2.jpg" alt="Halloween"></figure>
    <figure><img src="photos/halloween3.JPG" alt="Halloween"></figure>
    <figure><img src="photos/inno.jpg" alt="Inno"></figure>
    <figure><img src="photos/inno2.jpg" alt="Inno"></figure>
    <figure><img src="photos/inno3.jpg" alt="Inno"></figure>
    <figure><img src="photos/inno4.jpg" alt="Inno"></figure>
    <figure><img src="photos/inno5.jpg" alt="Inno"></figure>
    <figure><img src="photos/newyear5.jpg" alt="New Year"></figure>
    <figure><img src="photos/inno6.jpg" alt="Inno"></figure>
    <figure><img src="photos/inno7.jpg" alt="Inno"></figure>
    <figure><img src="photos/snowboarding2.jpg" alt="Snowboarding"></figure>
    <figure><img src="photos/snowboarding3.jpg" alt="Snowboarding"></figure>
    <figure><img src="photos/snowboarding4.jpg" alt="Snowboarding"></figure>
    <figure><img src="photos/snowboarding5.jpg" alt="Snowboarding"></figure>
    <figure><img src="photos/newyear.jpg" alt="New Year"></figure>
    <figure><img src="photos/newyear2.jpg" alt="New Year"></figure>
    <figure><img src="photos/newyear3.jpg" alt="New Year"></figure>
    <figure><img src="photos/newyear4.jpg" alt="New Year"></figure>
    <figure><img src="photos/birthday2.jpg" alt="Birthday"></figure>
    <figure><img src="photos/birthday3.jpg" alt="Birthday"></figure>
    <figure><img src="photos/birthday.jpg" alt="Birthday"></figure>
    <figure><img src="photos/meeting.webp" alt="Meeting"></figure>
    <figure><img src="photos/spring.jpg" alt="Spring ball"></figure>
</div>