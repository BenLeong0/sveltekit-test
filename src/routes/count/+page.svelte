<script>
	let count = 0;
	const increment = () => {
		count++;
	};
</script>

<title>Counter</title>

<button on:click={increment}>Count is {count}</button>
