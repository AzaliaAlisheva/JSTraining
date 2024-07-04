<script lang="ts">
    import { formatDistanceToNow } from "date-fns";
    import BackHeader from '../widgets/BackHeader.svelte';

    interface Info {
        img: string,
        alt: string,
        safe_title: string,
        day: number,
        month: number,
        year: number,
    }

    function fetchId(email: string) {
        const params = new URLSearchParams();
        if (email) {
            params.append('email', email);
        }
        return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString()).then(r => r.json()).then(r => parseInt(r));
    }

    function fetchInfo(id: number) {
        const params = new URLSearchParams();
        if (id) {
            params.append('id', id.toString());
        }
        return fetch('https://fwd.innopolis.university/api/comic?' + params.toString()).then(r => r.json());
    }

    function createDateString(event: Date) {
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        } as const;
        return event.toLocaleDateString(undefined, options);
    }

    async function display() {
        const id: number = await fetchId('a.alisheva@innopolis.university');
        const info: Info = await fetchInfo(id);
        console.log(info);

        const event = new Date(Date.UTC(info.year, info.month - 1, info.day));
        return {info, event};
    }

    let promise = display();
</script>

<BackHeader />
<main class="full" id="comic">
    {#await promise}
        <p>Loading...</p>
    {:then {info, event}}
        <figure>
            <img src={info.img} alt={info.alt}>
            <figcaption id="img-info">
                <h3 id="comic-title">{info.safe_title}</h3>
                <p id="release-date">{createDateString(event)}</p>
                <p id="from-now">{`Released ${formatDistanceToNow(event)} ago`}</p>
            </figcaption>
        </figure>
        
        <div id="img-info">
            
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    #img-info {
        display: inline-block;
        vertical-align: top;
        margin-left: 30px;
        text-align: left;
    }

    #comic {
        text-align: center;
    }

    #comic img {
        max-height: 80vh;
        max-width: 80%;
    }

    #from-now {
        font-weight: normal;
        margin-top: 8px;
    }

    #comic-title {
        font-weight: bold;
        text-transform: uppercase;
        margin: 25px 0;
    }

    #release-date {
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 0;
    }
</style>