<script>
	// Bring in now prop from App.svelte
	let { now } = $props();

	// User data
	let user = {
		name: "User Name",
		picture: "pfp.JPG",
		joined: new Date("2025-08-01"),
		daysActive: 4,
	};

	let daysSinceBeginning = $state(0);

	// Calculate days since user joined
	$effect(() => {
		daysSinceBeginning = Math.floor(
			(now.getTime() - user.joined.getTime()) / (1000 * 60 * 60 * 24)
		);
	});
</script>

<section class="flex justify-center my-5">
	<div class="bg-white rounded-lg shadow-lg p-8 w-136">
		<div class="flex items-center justify-between">
			<!-- Profile picture & name -->
			<div class="flex items-center space-x-4 flex-1 min-w-0">
				<img
					src={user.picture}
					alt=""
					class="w-24 h-24 rounded-full border-2 border-gray-300 shadow hover:shadow-xl hover:scale-105 transition-all duration-200"
				/>
				<h1 class="text-3xl font-bold text-rich-black">{user.name}</h1>
			</div>

			<!-- Days stats -->
			<div class="flex flex-col space-y-6 text-center">
				<div class="hover:scale-105 transition-all duration-200">
					<p class="text-2xl font-bold text-blue-600">{daysSinceBeginning}</p>
					<p class="text-sm text-gray-700">days since joined</p>
				</div>
				<div class="hover:scale-105 transition-all duration-200">
					<div class="flex items-center justify-center space-x-2">
						<img src="/svgs/fire.svg" alt="" class="w-6 h-6" />
						<p class="text-2xl font-bold text-orange-600">{user.daysActive}</p>
					</div>
					<p class="text-sm text-gray-700">days active</p>
				</div>
			</div>
		</div>
	</div>
</section>
