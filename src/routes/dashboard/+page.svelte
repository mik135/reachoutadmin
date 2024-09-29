<script>
	// reachoutworld@reach-437021.iam.gserviceaccount.com import { browser } from '$app/environment';

	import WeatherChart from '$lib/components/dashboard/WeatherChart.svelte';
	import { toast } from '$lib/components/Toast';
	/** @type {import('./$types').PageData} */
	export let data;

	const action = () => {
		toast.push('TOAST!', { classes: ['alert-success'] });
	};
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>


<div class="card flex-col bg-base-100 shadow-xl">
	<div class="flex flex-wrap lg:grid md:grid-cols-2 lg:grid-cols-3 gap-9 bg-primary text-primary-content bg-transparent">
		<div class="stat col-span-1">
			<div class="stat-title">You are in</div>
			<div class="stat-value">{data.location.region} ({data.location.country_name})</div>
		</div>

		<div class="stat bg-orange-600 py-9 col-span-1">
			<div class="stat-title">No of Registered Users</div>
			<div class="stat-value">{data.userCount}</div>
			<div class="stat-actions">
				<a href="/dashboard/people"><button class="btn btn-primary">See User's Info</button></a>
				
			</div>
		</div>

		<div class="stat bg-blue-600 py-9 col-span-1">
			<div class="stat-title">No of Unique Vistors</div>
			<div class="stat-value">10</div>
			<div class="stat-actions">
				
				
			</div>
		</div>
		<div class="stat bg-green-600 py-9 col-span-1">
			<div class="stat-title">No of Visits</div>
			<div class="stat-value">12</div>
			<div class="stat-actions">
				
				
			</div>
		</div>
		<div class="stat bg-yellow-600 py-9 col-span-1">
			<div class="stat-title">No of Downloads</div>
			<div class="stat-value">15</div>
			<div class="stat-actions">
				
				
			</div>
		</div>
		<div class="stat bg-indigo-600 py-9 col-span-1">
			<div class="stat-title">Country with the most visits</div>
			<div class="stat-value">Nigeria</div>
			<div class="stat-actions">
				
				
			</div>
		</div>

		
	</div>
</div>



<div class="card flex-col lg:flex-row bg-base-200 shadow-xl mt-5">
	<div class="hero">
		<div class="hero-content flex-col lg:flex-row">
			<!-- <img
				alt="alt"
				height="260"
				width="260"
				src="https://placeimg.com/260/260/arch"
				class="max-w-sm rounded-lg shadow-2xl"
			/> -->
			<div>
				<h1 class="text-5xl font-bold">Loveworld News!</h1>
				<p class="py-6">
					The “Your LoveWorld Specials” series, hosted by Pastor Chris Oyakhilome, continues to inspire and educate believers around the world. These events offer deep spiritual insights and have become a source of encouragement for many
				</p>
				<button class="btn btn-primary">Get Started</button>
			</div>
		</div>
	</div>
</div>

<div class="carousel w-full mt-5">
	<div id="item1" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/arch" class="w-full" />
	</div>
	<div id="item2" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/nature" class="w-full" />
	</div>
	<div id="item3" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/people" class="w-full" />
	</div>
	<div id="item4" class="carousel-item w-full">
		<img alt="" src="https://placeimg.com/800/200/tech" class="w-full" />
	</div>
</div>
<div class="flex justify-center w-full py-2 gap-2">
	<a href="#item1" class="btn btn-xs">1</a>
	<a href="#item2" class="btn btn-xs">2</a>
	<a href="#item3" class="btn btn-xs">3</a>
	<a href="#item4" class="btn btn-xs">4</a>
</div>

<style>
	.stat-title {
		color: white;
		font-weight: 800;
		font-family: monospace;
		font-size: 20px;
	}
	.stat {
		border-radius: 20px;
	}
</style>