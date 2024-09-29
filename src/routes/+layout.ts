import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient({
		supabaseUrl: 'https://hunqastofvereessimol.supabase.co',
		supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bnFhc3RvZnZlcmVlc3NpbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDU3NTAsImV4cCI6MjA0MTgyMTc1MH0.0gO6vyGHyPbazwCI--b404bbxKn1l8K9HbRY_m9kAoc',
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
