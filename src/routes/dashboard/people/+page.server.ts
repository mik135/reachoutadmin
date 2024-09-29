import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabaseAdminClient } from '$lib/server/supabase.js'

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		let { data: users, error } = await supabaseAdminClient.from('users').select('*')
		
		if (users) {
			return {
				users: users
			};
		}
		if (error) {
			return {};
		}
	} catch {
		throw error(404, 'SOMETHING WRONG');
	}

	throw error(404, 'Not found');
};
