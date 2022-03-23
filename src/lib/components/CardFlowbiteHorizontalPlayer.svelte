<script>
	import { fade } from 'svelte/transition';

	export let imageURL = '';
	export let imageAlt = '';
	export let title = '';
	export let subTitle = '';
	export let viewHref = '';
	export let trackID = '';
</script>

<div
	class="_shadow-gray-700 flex w-full flex-col items-center rounded-md bg-white shadow-2xl transition-all duration-300 hover:bg-gray-100 hover:shadow-gray-700 dark:bg-gray-800/40 dark:hover:bg-gray-800/90 sm:max-w-2xl sm:flex-row"
	transition:fade={{ delay: 250, duration: 500 }}>
	<a href={viewHref}>
		<img class="h-auto w-full rounded-t-lg object-cover sm:h-auto sm:w-56 sm:rounded-none sm:rounded-l-lg" src={imageURL} alt={imageAlt} />
	</a>
	<div class="flex flex-col justify-between p-4 pl-4 leading-normal sm:p-4 sm:text-left">
		<h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
		<div class="w-full pt-2">
			<slot name="audio" />
		</div>
	</div>
</div>
