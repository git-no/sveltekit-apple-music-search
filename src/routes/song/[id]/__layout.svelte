<div class="flex min-h-screen items-center justify-center md:px-16">
	<div class="relative w-full max-w-xl">
		<div class="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-emerald-300 opacity-70 mix-blend-multiply blur-xl filter" />
		<div class="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-yellow-400 opacity-70 mix-blend-multiply blur-xl filter" />
		<div class="animation-delay-6000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-teal-300 opacity-70 mix-blend-multiply blur-xl filter" />
		<div class="relative my-8 mx-2 space-y-4">
			<slot />
		</div>
	</div>
</div>
