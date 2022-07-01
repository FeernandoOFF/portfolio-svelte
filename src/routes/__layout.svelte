<script>
	import { themeChange } from 'theme-change';
	import SvelteSeo from 'svelte-seo';

	import { onMount } from 'svelte';
	import '$assets/app.css';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<SvelteSeo
	title="Fernando Obregon - Developer and Creator"
	description="Developer Traveling around the world sharing Knowledge and Experiences"
/>
<slot><!-- optional fallback --></slot>
<div class="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-secondary" />
