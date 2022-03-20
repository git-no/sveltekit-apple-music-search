<script context="module">
	let songs = [];

	export const load = async ({ fetch, params }) => {
		var search = params.search;
		console.log(`load searchString: ${search}`);

		// const response = await fetch(`/songs.json?search={search}`);
		const response = await fetch(`https://itunes.apple.com/search?term=${search}&entity=song`);
		var data = await response.json();

		if (response.ok) {
			songs = data.results;

			return {
				props: {
					songs,
					term: search
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
	import CardFlowbiteHorizontal from '$lib/components/CardFlowbiteHorizontal.svelte';
	import SearchForm from '$lib/components/SearchForm.svelte';

	export let songs = [];
	export let term = '';
</script>

<div class="min-h-screen flex items-center justify-center px-16">
	<div class="relative w-full max-w-lg my-10">
		<SearchForm searchTerm={term} />
		<ul class="my-10">
			{#each songs as song}
				<li class="py-2">
					<CardFlowbiteHorizontal
						title={song.trackName}
						subTitle={song.artistName}
						href={song.viewURL}
						trackID={song.trackId}
						imageAlt={song.trackName}
						imageURL={song.artworkUrl100} />
					<!-- <div>{song.trackName}</div> -->
				</li>
			{/each}
		</ul>
	</div>
</div>
