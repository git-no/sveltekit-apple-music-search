<script>
	import { goto } from '$app/navigation';

	export let imageURL = '';
	export let imageAlt = '';
	export let title = '';
	export let subTitle = '';
	export let viewHref = '';
	export let trackID = '';

	const onClick = () => {
		goto(`/song/${trackID}`);
	};
</script>

<button
	on:click={onClick}
	class="flex w-full flex-col items-center rounded-md bg-white shadow-gray-700 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-gray-700 dark:bg-gray-800/80 dark:hover:bg-gray-800 md:max-w-xl md:flex-row">
	<img class="h-32 w-full rounded-t-lg object-cover md:h-auto md:w-32 md:rounded-none md:rounded-l-lg" src={imageURL} alt={imageAlt} />
	<div class="flex flex-col justify-between p-2 pl-4 leading-normal md:text-left">
		<h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
		<slot name="audio" />
	</div>
</button>
