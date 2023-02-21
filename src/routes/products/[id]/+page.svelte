<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import Button from '@ui/Button.svelte';

	const goHome = () => {
		goto('/');
	};

	export let data: PageData;
</script>

<title>Product - {data.id}</title>

<p class="text-4xl font-bold mb-4 italic">Product: {data.id}</p>
<p class="text-lg mb-8">{data.content}</p>

<Button handleClick={goHome} class="mx-4">GO HOME</Button>
