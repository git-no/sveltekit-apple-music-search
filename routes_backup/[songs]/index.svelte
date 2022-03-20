<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let songs = [];

	onMount(async () => {
		var searchString = $page.params.songs;
		const data = await fetch(`https://itunes.apple.com/search?term=${searchString}&media=music&entity=music`);
		var res = await data.json();
		songs = res.results;
		console.log(songs);
	});
</script>

<section>
	{#await songs}
		<div>loading ...</div>
	{:then songs}
		<div class="grid grid-cols-2 md:grid-cols-3 grod-flow row gap-3">
			{#each songs as song}
				<div>
					<button
						on:click={goto(`${$page.params.searchString}/${song.trackId}`)}
						class="p-3 flex bg-white rounded-md bg-opacity-20 border-2 border-white border-opacity-30">
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
		<div>Error, maybe no search term is empty {error}</div>
	{/await}

	<div>{$page.params.searched}</div>
</section>

<style>
</style>
