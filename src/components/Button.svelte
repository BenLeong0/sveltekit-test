<script lang="ts">
  import clsx from 'clsx';
  export let handleClick: () => void;
</script>

<button
  class={clsx('cursor-pointer rounded-lg bg-gray-300 py-2 px-4 font-bold', $$props.class)}
  on:click={handleClick}
>
  <slot />
</button>
