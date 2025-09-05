<script>
	import Header from "./lib/Header.svelte";
	import Profile from "./lib/Profile.svelte";

	// Current date and time
	let now = $state(new Date());

	// Update now every second for running clock
	$effect(() => {
		const id = setInterval(() => {
			now = new Date();
		}, 1000);

		return () => clearInterval(id);
	});
</script>

<main class="bg-background3 h-auto min-h-screen">
	<Header {now} />
	<Profile {now} />
</main>

<style lang="postcss">
	@reference "tailwindcss";
</style>
