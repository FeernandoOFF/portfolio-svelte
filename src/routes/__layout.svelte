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

<header class="my-glass p-4 w-full fixed top-0 left-0">Header</header>
<div class="fixed bottom-8 right-8 md:w-16 md:h-16 w-12 h-12 rounded-full bg-secondary" />

<slot />

<style>
	.my-glass {
		background: rgba(11, 17, 33, 0.25);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		z-index: 50;
	}
</style>
