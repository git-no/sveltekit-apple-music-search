<script>
	export const prerender = true;

	import { goto } from '$app/navigation';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import { fade } from 'svelte/transition';

	const clicked = () => {
		goto(`${searchString}`);
	};

	var searchString = '';
</script>

<div class="flex min-h-screen items-center justify-center md:px-16">
	<div class="relative w-full max-w-xl" transition:fade={{ delay: 250, duration: 300 }}>
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
