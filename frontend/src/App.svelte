<script>
  import Header from "./lib/Header.svelte"
  import Counter from "./lib/Counter.svelte"
</script>

<main>
  <Header />
  <p class="text-2xl text-blue-500">Test!</p>
  <Counter />
</main>

<style lang="postcss">
  @reference "tailwindcss";
</style>