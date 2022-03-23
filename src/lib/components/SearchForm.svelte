<script>
	import { goto } from '$app/navigation';

	export var searchTerm = '';
	$: hasSearchTerm = searchTerm.length > 2;

	export const onSubmit = (e) => {
		// const formData = new FormData(e.target);
		// const searchTerm = formData.get('searchString');
		goto(`/songs/${searchTerm}`);
	};
</script>

<div class="relative my-8 md:space-y-4">
	<h1 class="mb-8 text-center text-2xl font-bold text-white sm:text-4xl md:text-4xl">Songs in Apple Music</h1>

	<form on:submit|preventDefault|stopPropagation={onSubmit} class="min-w-full">
		<div class="flex w-full rounded-md border border-white border-opacity-30 bg-white bg-opacity-20 p-1 text-white">
			<input
				id="searchTerm"
				class="my-2 w-4/5 bg-transparent p-2 text-2xl text-white focus:outline-none"
				type="text"
				name="searchTerm"
				bind:value={searchTerm} />
			<button
				type="submit"
				class="min-w-12 z-10 my-2 mr-2 hidden w-1/5  rounded-md bg-neutral-100/40 p-2 text-sm font-bold uppercase text-white transition-all duration-500 sm:block  md:text-base {hasSearchTerm
					? 'bg-neutral-100 text-teal-900 shadow hover:bg-neutral-50 hover:shadow-xl'
					: ''}">Search</button>
		</div>
		<label class="mt-4 hidden text-teal-50/50" for="searchTerm">Search Term</label>
		<button
			type="submit"
			class="z-10 my-2 mr-2 w-full min-w-full rounded-md bg-neutral-100/40 p-2 text-base font-bold uppercase text-white transition-all duration-500 sm:hidden md:text-base {hasSearchTerm
				? 'bg-neutral-100 text-teal-900 shadow hover:bg-neutral-50 hover:shadow-xl'
				: ''}">Search</button>
	</form>
</div>
