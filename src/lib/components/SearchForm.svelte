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

<div class="my-8 relative space-y-4">
	<h1 class="text-4xl text-center mb-8 text-white font-bold">Songs in Apple Music</h1>

	<form on:submit|preventDefault|stopPropagation={onSubmit} class="min-w-full">
		<div class="w-full flex rounded-md bg-white bg-opacity-20 p-1 border border-white border-opacity-30">
			<input class="w-4/5 my-2 bg-transparent text-white text-2xl p-2 focus:outline-none" type="text" name="searchTerm" bind:value={searchTerm} />
			<button
				type="submit"
				class="my-2 w-1/5 p-2 mr-2 rounded-md text-white bg-neutral-100/40 font-bold transition-all duration-500 uppercase {hasSearchTerm
					? 'bg-neutral-100 text-teal-900 shadow hover:bg-neutral-50 hover:shadow-xl'
					: ''}">Search</button>
		</div>
		<!-- </form> -->
	</form>
</div>
