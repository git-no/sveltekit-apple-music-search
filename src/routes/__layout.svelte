<script>
	import InfoButton from '$lib/components/InfoButton.svelte';
	import InfoModal from '$lib/components/InfoModal/InfoModal.svelte';
	import '../app.css';

	let showInfoModal = false;
</script>

<svelte:head>
	<title>Svelte Music Player</title>
</svelte:head>

<div class="via-emeral-500 background-animate md:px:20 min-h-screen w-full bg-gradient-to-br from-teal-800 to-yellow-500 px-10 lg:px-52">
	<slot />
</div>

<InfoButton on:clicked={() => (showInfoModal = !showInfoModal)} showInfoButton={!showInfoModal} />
<InfoModal on:close={() => (showInfoModal = false)} visble={showInfoModal} />
