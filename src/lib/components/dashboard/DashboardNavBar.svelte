<script lang="ts">
	import { page } from '$app/stores';
	import { BellIcon, MoonIcon, SunIcon, MenuIcon } from 'svelte-feather-icons';
</script>

<!-- NAV BAR -->
<div class="navbar px-5 border-b border-opacity-10 border-base-content">
	<!-- APP TITLE  -->
	<div class="flex-1">
		<div class="md:hidden">
			<MenuIcon />
		</div>
		<a href="/dashboard" class="hidden md:link md:no-underline md:text-xl md:font-bold md:font-mono">
			Reachout Dashboard
		</a>
	</div>

	<!-- USER -->
	{#if $page.data.session.user}
		<div class="hidden md:block md:px-5">
			<div>
				<h3 class="hidden md:block md:font-bold md:text-lg">{$page.data.session?.user.email}</h3>
			</div>
		</div>
	{/if}

	<!-- ALERTS  -->
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<BellIcon />
					<span class="badge bg-accent indicator-item" />
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
				<div class="card-body">
					<span class="font-bold text-lg">8 Items</span>
					<div class="card-actions">
						<button class="btn btn-primary btn-block">View Alerts</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
