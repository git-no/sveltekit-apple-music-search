<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let active = false;
	export let showInfoButton = true;

	const handleClick = () => {
		active = !active;
		dispatch('clicked', {
			active: active
		});
	};
</script>

<div class="fixed right-4 bottom-5">
	<button
		on:click|preventDefault={handleClick}
		class="border-1 max-w-auto rounded-full bg-neutral-50/20 p-3 px-6 text-xl font-bold text-white shadow transition-all hover:bg-neutral-50/40 hover:shadow-lg"
		class:hidden={!showInfoButton}>i</button>
</div>
