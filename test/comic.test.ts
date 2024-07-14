import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from '../src/routes/(app)/labs/comic/+page.svelte'; // Adjust the path according to your project structure
import { formatDistanceToNow } from 'date-fns';

describe('Page Component', () => {
	const day = 1;
	const month = 1;
	const year = 2000;
	const event = new Date(year, month - 1, day);

	const info = {
		img: 'Comic Url',
		alt: 'Comic Alt Text',
		safe_title: 'Comic Title',
		day: day,
		month: month,
		year: year
	};

	it('renders the comic image with correct attributes', () => {
		const { getByAltText } = render(Page, { props: { data: { info, event } } });
		const img = getByAltText('Comic Alt Text');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', 'Comic Url');
	});

	it('renders the comic title correctly', () => {
		const { getByText } = render(Page, { props: { data: { info, event } } });
		const title = getByText('Comic Title');
		expect(title).toBeInTheDocument();
	});

	it('renders the release date correctly', () => {
		const { getByText } = render(Page, { props: { data: { info, event } } });
		const options = {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'
		} as const;
		const releaseDate = getByText(event.toLocaleDateString(undefined, options));
		expect(releaseDate).toBeInTheDocument();
	});

	it('renders the "Released ... ago" text correctly', () => {
		const { getByText } = render(Page, { props: { data: { info, event } } });
		const fromNowText = getByText(`Released ${formatDistanceToNow(event)} ago`);
		expect(fromNowText).toBeInTheDocument();
	});

	it('renders SEO data correctly', () => {
		render(Page, { props: { data: { info, event } } });
		expect(document.title).toBe('Comic');
		const metaDescription = document.querySelector('meta[name="description"]');
		expect(metaDescription).not.toBeNull();
		expect(metaDescription?.getAttribute('content')).toBe('Demonstration of fetching');
	});
});
