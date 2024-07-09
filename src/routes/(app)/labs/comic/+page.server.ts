import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */

interface Info {
	img: string;
	alt: string;
	safe_title: string;
	day: number;
	month: number;
	year: number;
}

function fetchId(email: string) {
	const params = new URLSearchParams();
	if (email) {
		params.append('email', email);
	}
	return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
		.then((r) => r.json())
		.then((r) => parseInt(r));
}

function fetchInfo(id: number) {
	const params = new URLSearchParams();
	if (id) {
		params.append('id', id.toString());
	}
	return fetch('https://fwd.innopolis.university/api/comic?' + params.toString()).then((r) =>
		r.json()
	);
}

export const load = async () => {
	const id: number = await fetchId('a.alisheva@innopolis.university');
	if (!id) {
		error(500, 'Server error while id fetching');
	}
	const info: Info = await fetchInfo(id);
	if (!info) {
		error(500, 'Server error while info fetching');
	}
	const event = new Date(Date.UTC(info.year, info.month - 1, info.day));
	if (!event) {
		error(502, 'Bad Gateway');
	}
	return {
		info: info,
		event: event
	};
};
