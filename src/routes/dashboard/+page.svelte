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


<div style="padding:63% 0 0 0; position:relative;"><iframe src="https://app.databox.com/datawall/72d470bb2fd7c6d8ff0bd5948323732e3d7c29466fbaf39?i" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>


<style>
	.gridboard-item {
		border: 3px solid black;
	}
	@media screen and (width < 700px) {
		.gridboard {
			display: grid;
			grid-template-columns: 1fr;
		}
		.gridboard-item {
			grid-column: span 1;
		}
	}
	
</style>