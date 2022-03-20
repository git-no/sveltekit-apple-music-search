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
	import CardFlowbiteHorizontalPlay from '$lib/components/CardFlowbiteHorizontalPlay.svelte';

	export let song;
</script>

<div class="flex items-center justify-center px-16 w-full">
	<div class="relative w-full max-w-2xl my-10">
		<CardFlowbiteHorizontalPlay title={song.trackName} subTitle={song.artistName} imageAlt={song.trackName} imageURL={song.artworkUrl100}>
			<span slot="audio">
				<audio controls>
					<source src={song.previewUrl} type="audio/mpeg" />
				</audio>
			</span>
		</CardFlowbiteHorizontalPlay>
		<button class="text-teal-50/40 hover:text-teal-50/90 mt-2">&lsaquo; Back</button>
	</div>
</div>
