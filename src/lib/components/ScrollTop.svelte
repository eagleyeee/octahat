<script>
	let y;

	const gotoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<svelte:window bind:scrollY={y} />

<button
	on:click={gotoTop}
	class="fixed flex right-10 text-white dark:text-darkbanner p-[5px] h-8 w-8 justify-center items-center cursor-pointer transition-all duration-[0.5s] ease-in-out z-10 bg-darkbanner hover:bg-accent dark:bg-white dark:hover:bg-accent shadow-[_0px_1px_5px_1px_rgba(0,0,0,0.2)] rounded-[2px] {y >
	400
		? 'bottom-[30px] '
		: 'bottom-[-60px]'}"
>
	<span
		class="icon-[ic--round-keyboard-double-arrow-up] text-3xl transition-all duration-[0.5s] ease-in-out"
	></span>
</button>
