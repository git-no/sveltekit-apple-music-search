<script context="module">
	let song;

	export const load = async ({ fetch, params }) => {
		var trackID = params.id;

		// const response = await fetch(`/songs.json?search={search}`);
		const response = await fetch(`https://itunes.apple.com/search?term=${trackID}&entity=song`);
		var data = await response.json();

		if (response.ok) {
			song = data.results[0];

			return {
				props: {
					song
				}
			};
		}

		return {
			status: response.status,
			error: new Error(response.error.message)
		};
	};
</script>

<script>
	import CardFlowbiteHorizontalPlayer from '$lib/components/CardFlowbiteHorizontalPlayer.svelte';

	export let song;
</script>

<CardFlowbiteHorizontalPlayer title={song.trackName} subTitle={song.artistName} imageAlt={song.trackName} imageURL={song.artworkUrl100} viewHref={song.viewURL}>
	<span slot="audio" class="w-full">
		<audio controls>
			<source src={song.previewUrl} type="audio/mpeg" />
		</audio>
	</span>
</CardFlowbiteHorizontalPlayer>
<button on:click|once={() => window.history.back()} class="animation-color mt-2 text-teal-50/50 duration-300 hover:text-white">&lsaquo; Back</button>
