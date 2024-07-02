<script lang="ts">
    import { formatDistanceToNow } from "date-fns";

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

    function createImg(src: string, alt: string) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        return img;
    }

    function createDateString(event: Date) {
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        } as const;
        const date = document.createElement('label');
        date.textContent = event.toLocaleDateString(undefined, options);
        date.id = 'releaseDate';
        return date;
    }

    async function display() {
        const id: number = await fetchId('a.alisheva@innopolis.university');
        const info: Info = await fetchInfo(id);
        console.log(info);
        const comic = document.getElementById('comic') as HTMLElement;
        comic.insertBefore(createImg(info.img, info.alt), comic.firstChild);

        const displayedInfo = document.getElementById('imgInfo') as HTMLDivElement;
        displayedInfo.textContent = '';
        const title = document.createElement('label');
        title.textContent = info.safe_title;
        title.id = "comicTitle";
        displayedInfo.appendChild(title);

        const event = new Date(Date.UTC(info.year, info.month - 1, info.day));
        displayedInfo.appendChild(createDateString(event));

        const fromNow = document.createElement('label');
        fromNow.id = "fromNow";
        fromNow.textContent = `Released ${formatDistanceToNow(event)} ago`;
        displayedInfo.appendChild(fromNow);
    }

    display();
</script>

<header class="full"><a href="../#/labs"><img src="./img/white_back_arrow.png" alt="White back arrow" class="headericon"></a></header>
<main class="full" id="comic">
    <div id="imgInfo">Loading...</div>
</main>