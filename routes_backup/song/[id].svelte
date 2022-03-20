<script context="module">
	// import { page } from '$app/stores';
	// import { onMount } from 'svelte';

	export async function load({ params }) {
		var songId = params.id;
		const data = await fetch(`https://itunes.apple.com/search?term=${songId}&entity=music`);
		var res = await data.json();
		var song = res.results[0];
		return { props: { song } };
	}

	// onMount(async () => {
	// 	var songId = $page.params.songId;
	// 	const data = await fetch(`https://itunes.apple.com/search?term=${songId}&entity=song`);
	// 	var res = await data.json();
	// 	song = res.results[0];
	// 	return { props: { song } };
	// });
</script>

<script>
	export let song;
</script>

<section>
	<section>
		<div class="mt-12 flex flex-col items-center justify-center">
			<h1 class="text-3xl font-bold text-center mb-12">{song.trackName}</h1>
			<img src={song.artworkUrl100} alt={song.trackName} class="w-1/4 rounded-md mb-12" />
			<audio controls>
				<source src={song.previewUrl} type="audio/mpeg" />
			</audio>
		</div>
	</section>
	<!-- {#await song}
		<div>loading ...</div>
	{:then song}
		<div>
			<section>
				<div class="mt-12 flex flex-col items-center justify-center">
					<h1 class="text-3xl font-bold text-center mb-12">{song.trackName}</h1>
					<img src={song.artworkUrl100} alt="img" class="w-1/4 rounded-md mb-12" />
					<audio controls>
						<source src={song.previewUrl} type="audio/mpeg" />
					</audio>
				</div>
			</section>
		</div>
	{:catch song}
		<div>fehler beim finden</div>
	{/await}

	<div>{$page.params.searched}</div> -->
</section>
