<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_DEMO_MODE } from '$env/static/public';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;
</script>

<div class="card-body w-[90vw] max-w-[500px]">
	<h1 class="text-4xl mb-6">Sign In</h1>
	<form
		method="POST"
		action="/auth?/signin"
		use:enhance={() => {
			loading = true;
			return async ({ result, update }) => {
				update();
				if (result.type == 'failure') {
					loading = false;
				}
			};
		}}
	>
		<div class="form-control">
			<input
				autocomplete="username"
				id="email"
				name="email"
				value={form?.values?.email ?? ''}
				class="input "
				type="email"
				placeholder="email"
				required
			/>

			<input
				autocomplete="current-password"
				id="password"
				name="password"
				class="input mt-2"
				type="password"
				placeholder="password"
				required
			/>
		</div>

		<div class="form-control mt-4 mb-4">
			<button class="btn btn-primary" class:loading>Sign In</button>
		</div>

		<div class="text-sm text-secondary text-center">
			<a class="link no-underline" href="?signup">Don't have an account? <span class="font-bold underline underline-offset-1">Sign Up</span></a>
		</div>

		<div class="text-sm text-secondary text-center mt-1">
			<a class="link underline" href="?forgot">Forgot password?</a>
		</div>
	</form>
</div>

