<script>
	import { goto } from '$app/navigation';

	const search = (e) => {
		const formData = new FormData(e.target);
		const searchString = formData.get('searchString');
		console.log(searchString);
		goto(`${searchString}`);
	};
</script>

<main>
	<section>
		<div class="flex flex-col items-center justify-center">
			<div class="text-5xl text-center text-white font-semibold mb-12">Search an artist</div>
			<form on:submit|preventDefault={search} class="min-w-full">
				<div class="w-full flex rounded-md bg-white bg-opacity-20 p-1 border border-white border-opacity-30">
					<input class="w-4/5 bg-transparent text-white" type="text" name="searchString" />
					<button type="submit" class="w-1/5 p-2 rounded-md bg-white font-medium">Search</button>
				</div>
			</form>
		</div>
	</section>
</main>
