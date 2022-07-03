<script>
	import HeroText from '$components/HeroText.svelte';
	import SvelteSeo from 'svelte-seo';

	import { fly } from 'svelte/transition';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import { onMount } from 'svelte';
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<SvelteSeo
	title="Home - Fernando Obregon "
	description="Developer Traveling around the world sharing Knowledge and Experiences"
/>

{#if loaded}
	<Parallax sections={3}>
		<ParallaxLayer rate={-0.9} offset={0.3} class="text-center z-30 ">
			<section class="hero  mx-auto  w-10/12 ">
				<div class="hero-content w-full">
					<p
						class="  flex w-full flex-col text-[13vw] font-extrabold leading-none tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
					>
						<span
							transition:fly={{ x: 1000 }}
							class=" bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-center"
							>Fernando.</span
						><span
							transition:fly={{ x: -1000, delay: 300 }}
							class=" bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center sm:text-left "
							>Building</span
						>
					</p>
				</div>
			</section>
		</ParallaxLayer>

		<ParallaxLayer rate={1} offset={0.7} class="flex justify-center z-20">
			<HeroText text="Useless Things" />
		</ParallaxLayer>
		<ParallaxLayer rate={1} offset={1} class="flex justify-center">
			<HeroText text="Crazy Things" />
		</ParallaxLayer>
		<ParallaxLayer rate={1} offset={1.85} class="flex justify-center">
			<HeroText text="Useful Things" />
		</ParallaxLayer>
		<!-- <ParallaxLayer rate={1} offset={2.35} class="flex justify-center">
			<HeroText />
		</ParallaxLayer> -->
		<ParallaxLayer offset={2} span={3} class="my-glass z-10 flex justify-center pt-[50vh]">
			<!-- <h2 class="title text-center mt-[25vh]">Just things</h2> -->
			<HeroText text="Just... Things" />
		</ParallaxLayer>
	</Parallax>
{/if}

<style>
	.my-glass {
		background: rgba(11, 17, 33, 0.25);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		z-index: 50;
	}
</style>
