import { render, screen, fireEvent } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Info from '../src/lib/components/Info.svelte';

test('processes contact button click correctly', async () => {
	render(Info);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).not.toHaveTextContent('You clicked me');
	await fireEvent.click(button);
	expect(button).toHaveTextContent('You clicked me');
});
