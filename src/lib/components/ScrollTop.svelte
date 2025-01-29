<script>
	let y = $state(0);

	const gotoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<svelte:window bind:scrollY={y} />

<button
	onclick={gotoTop}
	class="fixed right-10 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[2px] bg-darkbanner p-[5px] text-white shadow-[_0px_1px_5px_1px_rgba(0,0,0,0.2)] transition-all duration-[0.5s] ease-in-out hover:bg-accent dark:bg-white dark:text-darkbanner dark:hover:bg-accent {y >
	400
		? 'bottom-[30px] '
		: 'bottom-[-60px]'}"
	aria-label="toTop"
>
	<span
		class="icon-[ic--round-keyboard-double-arrow-up] text-3xl transition-all duration-[0.5s] ease-in-out"
	></span>
</button>
