<script>
	export let imageURL = '';
	export let imageAlt = '';
	export let title = '';
	export let subTitle = '';
	export let href = '';
	export let trackID = '';
</script>

<div
	class="flex flex-col items-center bg-white rounded-md _shadow-gray-700 hover:shadow-gray-700 shadow-2xl md:flex-row md:max-w-2xl hover:bg-gray-100 dark:bg-gray-800/40 dark:hover:bg-gray-800/90 transition-all duration-300 w-full">
	<img class="object-cover w-full h-40 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imageURL} alt={imageAlt} />
	<div class="flex flex-col justify-between p-2 pl-4 leading-normal md:text-left">
		<h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
		<slot name="audio" />
	</div>
</div>
