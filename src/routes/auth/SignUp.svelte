<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;
	let disabled = true;

	let password = '';
	let password2 = '';

	$: {
		if (password == password2) {
			disabled = false;
		} else {
			disabled = true;
		}
	}
</script>

<div class="card-body w-[90vw] max-w-[500px]">
	<h1 class="text-4xl mb-6">Sign Up</h1>

	<form
		method="POST"
		action="/auth?/signup"
		use:enhance={() => {
			loading = true;
			return async ({ result, update }) => {
				update();
				// console.log(result);
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
				class="input"
				type="email"
				placeholder="Email"
				required
			/>

			<input
				id="password"
				name="password"
				class="input mt-2"
				type="password"
				bind:value={password}
				placeholder="Enter password"
				required
			/>

			<input
				id="password"
				name="password"
				class="input mt-2"
				type="password"
				bind:value={password2}
				placeholder="Confirm Password"
				required
			/>
		</div>

		<div class="form-control mt-4 mb-4">
			<button class:btn-disabled={disabled} class="btn btn-primary" class:loading>Sign Up</button>
		</div>

		<div class="text-sm text-secondary text-center">
			<a class="link no-underline" href="?signin">Already have an account? <span class="font-bold">Sign-In</span></a>
		</div>
	</form>
</div>
