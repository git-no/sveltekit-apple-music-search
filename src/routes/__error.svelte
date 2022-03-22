<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex h-screen flex-col justify-center text-white">
	<div class="text-center">
		<div class="text-4xl">Never Gonna Give You Up ...</div>
		<div class="text-4xl">Never gonna say goodbye ...</div>
	</div>
	<div class="flex justify-center">
		<button
			class=" border-1 max-w-auto mt-8 rounded-full bg-neutral-50/20 p-2 px-6 text-2xl shadow transition-all hover:bg-neutral-50/30 hover:shadow-lg"
			on:click={() => goto('/')}>Take me Home</button>
	</div>
</div>
