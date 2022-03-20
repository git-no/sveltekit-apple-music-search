<script>
	export let imageURL = '';
	export let imageAlt = '';
	export let title = '';
	export let subTitle = '';
	export let href = '';
</script>

<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
	<img class="rounded-t-lg" src={imageURL} alt={imageAlt} />
	<div class="p-5">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{subTitle}
		</p>
		<slot name="audio">
			<span>empty</span>
		</slot>
	</div>
</div>
