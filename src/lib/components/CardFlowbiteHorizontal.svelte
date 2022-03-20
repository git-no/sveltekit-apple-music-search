<script>
	import { goto } from '$app/navigation';

	export let imageURL = '';
	export let imageAlt = '';
	export let title = '';
	export let subTitle = '';
	export let href = '';
	export let trackID = '';

	const onClick = () => {
		console.log(`clicked trackID: ${trackID}`);
		goto(`/song/${trackID}`);
	};
</script>

<button
	on:click={onClick}
	class="flex flex-col items-center bg-white rounded-md shadow-gray-700 hover:shadow-gray-700 hover:shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-all duration-300 w-full">
	<img class="object-cover w-full h-32 rounded-t-lg md:h-auto md:w-32 md:rounded-none md:rounded-l-lg" src={imageURL} alt={imageAlt} />
	<div class="flex flex-col justify-between p-2 pl-4 leading-normal md:text-left">
		<h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
		<slot name="audio" />
	</div>
</button>
