<script lang="ts">
	import clsx from 'clsx';
	export let handleClick: () => void;
</script>

<button
	class={clsx('cursor-pointer bg-gray-300 py-2 px-4 rounded-lg font-bold', $$props.class)}
	on:click={handleClick}
>
	<slot />
</button>
