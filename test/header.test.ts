import { render } from '@testing-library/svelte';
import { expect, vi, it, describe } from 'vitest';

import Header from '../src/lib/components/Header.svelte';

const mocks = await vi.hoisted(async () => {
	const { writable } = await import('svelte/store');
	return {
		mockPage: writable({ url: { pathname: '/' } })
	};
});

vi.mock('$app/stores', () => {
	return {
		page: mocks.mockPage
	};
});

describe('Header Component', () => {
	it('renders all navigation links', () => {
		const { getByText } = render(Header);

		expect(getByText('Home')).toBeInTheDocument();
		expect(getByText('About')).toBeInTheDocument();
		expect(getByText('Photos')).toBeInTheDocument();
		expect(getByText('Portfolio')).toBeInTheDocument();
		expect(getByText('Labs')).toBeInTheDocument();
	});

	it('disables the Home link and enables other links when on the Home page', () => {
		const { getByText } = render(Header);

		expect(getByText('Home')).toHaveClass('disabled');
		expect(getByText('About')).not.toHaveClass('disabled');
		expect(getByText('Photos')).not.toHaveClass('disabled');
		expect(getByText('Portfolio')).not.toHaveClass('disabled');
		expect(getByText('Labs')).not.toHaveClass('disabled');
	});

	it('disables the About link and enables other links when on the About page', () => {
		mocks.mockPage.set({ url: { pathname: '/about' } });
		const { getByText } = render(Header);

		expect(getByText('Home')).not.toHaveClass('disabled');
		expect(getByText('About')).toHaveClass('disabled');
		expect(getByText('Photos')).not.toHaveClass('disabled');
		expect(getByText('Portfolio')).not.toHaveClass('disabled');
		expect(getByText('Labs')).not.toHaveClass('disabled');
	});

	it('disables the Photos link and enables other links when on the Photos page', () => {
		mocks.mockPage.set({ url: { pathname: '/photos' } });
		const { getByText } = render(Header);

		expect(getByText('Home')).not.toHaveClass('disabled');
		expect(getByText('About')).not.toHaveClass('disabled');
		expect(getByText('Photos')).toHaveClass('disabled');
		expect(getByText('Portfolio')).not.toHaveClass('disabled');
		expect(getByText('Labs')).not.toHaveClass('disabled');
	});

	it('disables the Portfolio link and enables other links when on the Portfolio page', () => {
		mocks.mockPage.set({ url: { pathname: '/portfolio' } });
		const { getByText } = render(Header);

		expect(getByText('Home')).not.toHaveClass('disabled');
		expect(getByText('About')).not.toHaveClass('disabled');
		expect(getByText('Photos')).not.toHaveClass('disabled');
		expect(getByText('Portfolio')).toHaveClass('disabled');
		expect(getByText('Labs')).not.toHaveClass('disabled');
	});

	it('disables the Labs link and enables other links when on the Labs page', () => {
		mocks.mockPage.set({ url: { pathname: '/labs' } });
		const { getByText } = render(Header);

		expect(getByText('Home')).not.toHaveClass('disabled');
		expect(getByText('About')).not.toHaveClass('disabled');
		expect(getByText('Photos')).not.toHaveClass('disabled');
		expect(getByText('Portfolio')).not.toHaveClass('disabled');
		expect(getByText('Labs')).toHaveClass('disabled');
	});
});
