<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1>You've reached a bad page...</h1>
<p>{$page.error?.id} is <b>NOT</b> a valid id!</p>
