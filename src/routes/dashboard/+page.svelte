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


<div style="padding:0 0 0 0; position:relative;"><iframe src="https://app.databox.com/datawall/f4471f4c97958619b7b5c5f25240d1023781b7866fd7cd2" width="100%" height="600px"></iframe></div>


