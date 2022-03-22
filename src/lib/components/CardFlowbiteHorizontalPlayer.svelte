<script>
	export let imageURL = '';
	export let imageAlt = '';
	export let title = '';
	export let subTitle = '';
	export let href = '';
	export let trackID = '';
</script>

<div
	class="flex flex-col items-center bg-white rounded-md _shadow-gray-700 hover:shadow-gray-700 shadow-2xl sm:flex-row sm:max-w-2xl hover:bg-gray-100 dark:bg-gray-800/40 dark:hover:bg-gray-800/90 transition-all duration-300 w-full">
	<img class="object-cover w-full h-auto rounded-t-lg sm:h-auto sm:w-56 sm:rounded-none sm:rounded-l-lg" src={imageURL} alt={imageAlt} />
	<div class="flex flex-col justify-between p-4 sm:p-4 pl-4 leading-normal sm:text-left">
		<h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
		<div class="w-full pt-2">
			<slot name="audio" />
		</div>
	</div>
</div>
