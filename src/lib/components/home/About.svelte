<script>
	import welImg1 from '$lib/assets/images/creative-2.png';

	let y = $state(0);
</script>

<svelte:window bind:scrollY={y} />

<section class="bg-banner py-[150px] dark:bg-darkbanner" id="about">
	<div class="container">
		<div class="m-[0_auto] max-w-[1122px] text-center">
			<h6
				class="pl-7 font-kanit font-medium text-accent drop-shadow-xl before:absolute before:-ml-6 before:mt-[7px] before:h-3 before:w-3 before:rounded-[1px] before:bg-accent before:drop-shadow-sm before:content-['']"
			>
				Our Story
			</h6>
			<h2
				class="about-text flex flex-wrap justify-center pt-12 text-center font-titillium text-5xl leading-[85px] text-primary drop-shadow-xl transition-all duration-[0.5s] ease-in-out dark:text-white"
			>
				<span>&nbsp;Explore our remote digital&nbsp;</span>
				<img src={welImg1} alt="" />
				<span>&nbsp;workspace!&nbsp;</span>
				<span>&nbsp;We excel in fortifying digital&nbsp;</span>
				<img src={welImg1} alt="" />
				<span>&nbsp;fortress&nbsp;</span>
				<span>&nbsp;via comprehensive security assessment&nbsp;</span>
				<span>&nbsp;operations, and crafting visually mesmerizing&nbsp;</span>
				<span>&nbsp;headless ecommerce web&nbsp;</span>
				<img src={welImg1} alt="" />
				<span>&nbsp;experiences</span>
			</h2>
			<!--We excel in fortifying your digital fortress through comprehensive security assessment operations.
			Our process combines advanced vulnerability scanning, meticulous penetration testing to detect,
			evaluate, and eliminate or neutralize potential threats across your digital ecosystem-->
		</div>
	</div>
</section>

<style>
	.about-text > span {
		@apply relative inline-block justify-center text-center transition-all duration-[0.5s] ease-in-out;
	}

	.about-text > img {
		@apply my-3 h-[62px] overflow-hidden rounded-full py-1 drop-shadow-xl transition-all delay-150 duration-[0.5s] ease-in-out;
	}
</style>
