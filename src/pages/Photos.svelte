<script lang="ts">
    import Header from "../widgets/Header.svelte";
    import Info from "../widgets/Info.svelte";

    interface Photo {
        src: string,
        alt: string
    }

    let photos: Photo[] = [
        { src: "photos/lake.jpg", alt: "Lake" },
        { src: "photos/horseriding.jpg", alt: "Horseriding" },
        { src: "photos/UI-034.jpg", alt: "IU dance class" },
        { src: "photos/UI-035.jpg", alt: "IU dance class" },
        { src: "photos/bootcamp.jpg", alt: "IU dance class group" },
        { src: "photos/classes.jpg", alt: "IU bootcamp class" },
        { src: "photos/date2.jpg", alt: "Date" },
        { src: "photos/date3.jpg", alt: "Date" },
        { src: "photos/evil.jpg", alt: "Evil" },
        { src: "photos/halloween.jpg", alt: "Halloween" },
        { src: "photos/halloween2.jpg", alt: "Halloween" },
        { src: "photos/halloween3.JPG", alt: "Halloween" },
        { src: "photos/inno.jpg", alt: "Inno" },
        { src: "photos/inno2.jpg", alt: "Inno" },
        { src: "photos/inno3.jpg", alt: "Inno" },
        { src: "photos/inno4.jpg", alt: "Inno" },
        { src: "photos/inno5.jpg", alt: "Inno" },
        { src: "photos/newyear5.jpg", alt: "New Year" },
        { src: "photos/inno6.jpg", alt: "Inno" },
        { src: "photos/inno7.jpg", alt: "Inno" },
        { src: "photos/snowboarding2.jpg", alt: "Snowboarding" },
        { src: "photos/snowboarding3.jpg", alt: "Snowboarding" },
        { src: "photos/snowboarding4.jpg", alt: "Snowboarding" },
        { src: "photos/snowboarding5.jpg", alt: "Snowboarding" },
        { src: "photos/newyear.jpg", alt: "New Year" },
        { src: "photos/newyear2.jpg", alt: "New Year" },
        { src: "photos/newyear3.jpg", alt: "New Year" },
        { src: "photos/newyear4.jpg", alt: "New Year" },
        { src: "photos/birthday2.jpg", alt: "Birthday" },
        { src: "photos/birthday3.jpg", alt: "Birthday" },
        { src: "photos/birthday.jpg", alt: "Birthday" },
        { src: "photos/meeting.webp", alt: "Meeting" },
        { src: "photos/spring.jpg", alt: "Spring ball" },
    ];
</script>

<Info />
<Header disabledLabel="Photo"/>
<main>
    <div id="photos">
        {#each photos as photo}
            <figure>
                <img src={photo.src} alt={photo.alt} />
            </figure>
        {/each}
    </div>
</main>