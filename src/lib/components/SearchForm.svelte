<script>
	import { goto } from '$app/navigation';

	export var searchTerm = '';

	export const onSubmit = (e) => {
		// const formData = new FormData(e.target);
		// const searchTerm = formData.get('searchString');
		console.log(searchTerm);
		goto(`/songs/${searchTerm}`);
	};

	// const forwardTo = (searchTerm) => {
	// 	console.log(`goto: ${searchTerm}`);
	// 	goto(`${searchTerm}`);
	// };
</script>

<div class="m-8 relative space-y-4">
	<h1 class="text-4xl text-center mb-8 text-white">Songs in Apple Music</h1>

	<form on:submit|preventDefault|stopPropagation={onSubmit} class="min-w-full">
		<div class="w-full flex rounded-md bg-white bg-opacity-20 p-1 border border-white border-opacity-30">
			<input class="w-4/5 my-2 bg-transparent text-white text-2xl p-2 focus:outline-none" type="text" name="searchTerm" bind:value={searchTerm} />
			<!-- <input class="w-4/5 my-2 bg-transparent text-white text-2xl p-2 focus:outline-none" type="text" bind:value={searchString} /> -->
			<!-- <button on:click={clicked} class="my-2 w-1/5 p-2 mr-2 rounded-md bg-white font-medium">Search</button> -->
			<button type="submit" class="my-2 w-1/5 p-2 mr-2 rounded-md bg-white font-medium shadow hover:shadow-xl transition-all duration-300 ">Search</button>
		</div>
		<!-- </form> -->
	</form>
</div>
