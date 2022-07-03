<script>
	import { fly } from 'svelte/transition';
	import SvelteSeo from 'svelte-seo';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import { onMount } from 'svelte';
	import HeroText from '$components/HeroText.svelte';
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<SvelteSeo
	title="Blog - Fernando Obregon "
	description="Developer Traveling around the world sharing Knowledge and Experiences"
/>

<div>
	<h1>Blog in progress</h1>
</div>
