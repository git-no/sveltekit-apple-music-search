<script>
	import CardCalcite from '$lib/components/CardCalcite.svelte';
	import CardImage from '$lib/components/CardImage.svelte';
	import CardStacked from '$lib/components/CardStacked.svelte';
	import CardTailwind from '$lib/components/CardTailwind.svelte';
	import CardUpright from '$lib/components/CardUpright.svelte';
</script>

<div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
	<div class="relative w-full max-w-lg">
		<CardCalcite />
		<CardImage />
		<CardStacked />
		<CardTailwind />
		<CardUpright />
	</div>
</div>
