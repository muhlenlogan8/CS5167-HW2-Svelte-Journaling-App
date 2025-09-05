<script>
    // Bring in now prop from App.svelte
    let { now } = $props();
</script>

<header class="bg-header flex items-center px-10 py-3 justify-between">
	<h1 class="text-4xl text-white font-bold">My Tracker</h1>
    <p class="text-white text-xl font-semibold">{now.toLocaleTimeString()}</p>
</header>
