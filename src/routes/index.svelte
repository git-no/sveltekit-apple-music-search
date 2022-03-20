<script>
	export const prerender = true;
	// import { page } from '$app/stores';
	// import { onMount } from 'svelte';
	// let promise = undefined;
	// let songs = Promise.resolve(undefined);
	// const search = async (searchString) => {
	// 	// var searchString = $page.params.searchString;
	// 	const res = await fetch(`https://itunes.apple.com/earch?term=${searchString}&entity=song`, {
	// 		// mode: 'no-cors' // 'cors' by default
	// 	});
	// 	var data = await data.json();
	// 	console.log(data);
	// 	if (res.ok) {
	// 		return data;
	// 	} else {
	// 		throw new Error(data);
	// 	}
	// };
	// function handleSubmit({ detail: { values, setSubmitting, resetForm } }) {
	// 	setTimeout(() => {
	// 		console.log(values);
	// 		setSubmitting(false);
	// 		resetForm({
	// 			user: { email: 'test@user.com' }
	// 		});
	// 	}, 2000);
	// }
	import { goto } from '$app/navigation';
	import SearchForm from '$lib/components/SearchForm.svelte';

	// export const onSubmit = (e) => {
	// 	const formData = new FormData(e.target);
	// 	const searchString = formData.get('searchString');
	// 	console.log(searchString);
	// 	// goto(`${searchString}`);
	// };

	const clicked = () => {
		console.log(`goto: ${searchString}`);
		goto(`${searchString}`);
	};

	var searchString = '';
</script>

<div class="min-h-screen flex items-center justify-center px-16">
	<div class="relative w-full max-w-lg">
		<SearchForm />

		<!-- {#await songs then songs}
			<div class="grid grid-cols-2 md:grid-cols-3 grod-flow row gap-3">
				{#each songs as song}
					<div>
						<button on:click={goto(`song/${song.trackId}`)} class="p-3 flex bg-white rounded-md bg-opacity-20 border-2 border-white border-opacity-30">
							<img src={song.artworkUrl100} alt="img" class="rounded-md mr-4 w-1/4" />
							<div class="flex flex-col items-start text-left">
								<div class="mb-2 h-6 overflow-hidden">{song.trackName}</div>
								<div class="text-xs font-bold">{song.artistName}</div>
							</div>
						</button>
					</div>
				{/each}
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await} -->
	</div>
</div>
