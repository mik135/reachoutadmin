import type { User } from '@supabase/supabase-js';
import type { Actions, PageServerLoad } from './$types';

import { supabaseAdminClient as supabaseClient } from '$lib/server/supabase';
import { roleAdmin, roleSuper } from '$lib/utils';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	const org = session?.user.app_metadata.org;

	const res = await supabaseClient.auth.admin.listUsers();
	let users: User[] = [];
	let orgs = [];
	// console.log(session.user)
	if (roleAdmin(session)) {
		users = res.data.users;

		const r = await supabase.from('orgs').select('id, name');
	} else {
		users = res.data.users.filter((user) => user.app_metadata.org.id == org.id);
	}
	return { users };
};

export const actions: Actions = {
	create: async ({ request, locals: { getSession } }) => {
		const session = await getSession();
		const form_data = await request.formData();
		const username = form_data.get('username')?.toString();
		const email = "admin@test.com";
		const role = form_data.get('role')?.toString();
		const password = form_data.get('password')?.toString();
		let org: any | undefined;

		org = session?.user.app_metadata.org;
		

		const res = await supabaseClient.auth.admin.createUser({
			email,
			password,
			app_metadata: { org, role },
			user_metadata: {
				username: username
			},
			email_confirm: true
		});

		if (res.error) {
			return fail(400, { error: res.error.message });
		}

		return { success: 'User created succesfully' };
	},

	delete: async ({ request }) => {

		const form_data = await request.formData();
		const id = form_data.get('id')?.toString();

		// TODO PREVENT DELETING USERS FROM OTHER ORGS

		if (id) {
			const res = await supabaseClient.auth.admin.deleteUser(id);
			if (res.error) {
				// console.log(res)
				return fail(400, { error: res.error.message });
			}
		} else {
			return fail(400, { error: 'Invalid data' });
		}
		return { success: 'User deleted succesfully' };
	}
};
