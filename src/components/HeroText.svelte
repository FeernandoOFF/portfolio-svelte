<script lang="ts">
	import { fly } from 'svelte/transition';
	export let text: string;
</script>

<span
	transition:fly={{ y: 1000, delay: 400 }}
	class=" bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-center sm:text-right text-[13vw] font-extrabold leading-none tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
	>{text}</span
>
