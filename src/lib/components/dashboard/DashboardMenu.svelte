<script lang="ts">
	import { page } from '$app/stores';
	import { isAdmin, isSuper, userColor } from '$lib/utils';
	import {
		ArchiveIcon,
		HomeIcon,
		LayoutIcon,
		ListIcon,
		LogOutIcon,
		RadioIcon,
		SettingsIcon,
		UserIcon,
		UsersIcon
	} from 'svelte-feather-icons';
	import NavBarButton from './NavBarButton.svelte';

	const role: string = $page.data.session?.user.app_metadata.role ?? '';
</script>

<div class="flex flex-col h-full border-r border-opacity-10 border-base-content z-50 bg-black">
	<div class="navbar flex flex-col h-full bg-black">
		<div class="mt-1 mb-8">
			<a class="px-3 pt-2" href="/">
				<!-- <SmileIcon class="" /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="white"
					stroke="white"
					stroke-width="1"
					><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect
						x="14"
						y="14"
						width="7"
						height="7"
					/><rect x="3" y="14" width="7" height="7" /></svg
				>
			</a>
		</div>

		<NavBarButton tooltip="Home" dest="/dashboard">
			<span slot="icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
			</span>
		</NavBarButton>

		<NavBarButton tooltip="People" dest="/dashboard/people">
			<span slot="icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
			</span>
		</NavBarButton>

		<div class="max-md:my-0 divider" />

		{#if isAdmin(role)}
			<NavBarButton tooltip="Admins" dest="/dashboard/_admin/users">
				<span slot="icon"><UsersIcon class="stroke-warning" /></span>
			</NavBarButton>
			<div class="divider" />
		{/if}

		{#if isSuper(role)}
			<NavBarButton tooltip="Organizations" dest="/dashboard/_super/orgs">
				<span slot="icon"><ArchiveIcon class="stroke-accent" /></span>
			</NavBarButton>
			<NavBarButton tooltip="Events" dest="/dashboard/_super/events">
				<span slot="icon"><ListIcon class="stroke-accent" /></span>
			</NavBarButton>
			<div class="max-md:my-0 divider" />
		{/if}

		<!-- <NavBarButton tooltip="Help" dest="/dashboard/help">
			<span slot="icon"><HelpCircleIcon /></span>
		</NavBarButton>
		<div class="max-md:my-0 divider" /> -->

		<div class="flex flex-1" />

		<div class="dropdown dropdown-right dropdown-end mb-4">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<UserIcon class={userColor(role)} />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="dropdown-content menu w-max ml-2 p-3 bg-primary rounded-box">
				<li>
					<div class="flex flex-row">
						<a class="flex w-max" href="/dashboard/settings"
							><SettingsIcon class="mr-4" />Settings</a
						>
					</div>
				</li>
				<li>
					<div class="flex flex-row">
						<form action="/auth?/signout" method="POST">
							<button class="flex w-max" type="submit"><LogOutIcon class="mr-4" />Sign Out</button>
						</form>
					</div>
				</li>
			</ul>
		</div>

		{#if isSuper(role)}
			<!-- svelte-ignore missing-declaration -->
			<div class="dropdown dropdown-right dropdown-end mb-0 text-xs">{__VERSION__}</div>
		{/if}
	</div>
</div>
