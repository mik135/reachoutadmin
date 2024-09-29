import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const result = await fetch('https://dummyjson.com/products');
	const products = await result.json();

	if (products) {
		return products;
	}

	error(404, 'Not found');
};
