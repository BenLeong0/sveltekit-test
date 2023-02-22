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

<p class="mb-4 text-4xl font-bold italic">Product: {data.id}</p>
<p class="mb-8 text-lg">{data.content}</p>

<Button handleClick={goHome} class="mx-4">GO HOME</Button>
