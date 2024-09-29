import { supabaseAdminClient } from '$lib/server/supabase.js'

export const load = async (event: { fetch: (arg0: string) => any; }) => {
	const ip_api_result = await event.fetch('https://ipapi.co/json');
	const location = await ip_api_result.json();
	// console.log(location)

	const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m&current_weather=true`;
	// console.log(weather_url)
	const weather_result = await event.fetch(weather_url);
	const weather = await weather_result.json();
	// console.log(weather)
	const { count, error } = await supabaseAdminClient.from('users').select('*', { count: 'exact', head: true });

	if (error) {
		console.error('Error fetching user count:', error);
		return { 
			location: location,
			weather: weather,
			userCount: 0 };
	  }

	return {
		location: location,
		weather: weather,
		userCount: count
	};
};
