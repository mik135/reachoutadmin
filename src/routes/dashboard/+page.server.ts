import { supabaseAdminClient } from '$lib/server/supabase.js'

export const load = async (event: { fetch: (arg0: string) => any; }) => {
	const { count, error } = await supabaseAdminClient.from('users').select('*', { count: 'exact', head: true });

	if (error) {
		console.error('Error fetching user count:', error);
		return { 
			userCount: 0 };
	  }

	return {
		userCount: count
	};
};
