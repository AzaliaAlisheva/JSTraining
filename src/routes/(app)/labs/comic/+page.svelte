<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';

	/** @type {import('./$types').PageData} */
	export let data: { info: Info; event: Date };
	const { info, event } = data;

	interface Info {
		img: string;
		alt: string;
		safe_title: string;
		day: number;
		month: number;
		year: number;
	}

	function createDateString(event: Date) {
		const options = {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'
		} as const;
		return event.toLocaleDateString(undefined, options);
	}
</script>

<main class="full" id="comic">
	<figure>
		<img src={info.img} alt={info.alt} />
		<figcaption id="img-info">
			<h3 id="comic-title">{info.safe_title}</h3>
			<p id="release-date">{createDateString(event)}</p>
			<p id="from-now">{`Released ${formatDistanceToNow(event)} ago`}</p>
		</figcaption>
	</figure>
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
		max-height: 65vh;
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
	figure {
		margin: 10px 0;
	}
</style>
