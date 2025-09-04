<script>
  let count = $state(0)
  let test = $state(0)

  const increment = () => {
    count += 1
    test += 2
  }
</script>

<div class="flex items-center justify-center w-full">
  <button class="bg-blue-500 text-white font-semibold p-2 rounded-lg shadow-lg hover:bg-blue-300 hover:scale-115 transition-all" onclick={increment}>
    count is {count}
  </button>
</div>
<div class="flex items-center justify-center w-full">
  <p class="text-2xl text-red-500 mt-4">Test: {test}</p>
</div>