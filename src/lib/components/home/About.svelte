<script>
	import welImg1 from '$lib/assets/images/creative-2.png';

	let y;
</script>

<svelte:window bind:scrollY={y} />

<section class="my-[150px]">
	<div class="container">
		<div class="max-w-[1122px] text-center m-[0_auto]">
			<h6
				class="pl-7 text-accent drop-shadow-2xl before:content-[''] before:absolute before:h-3 before:w-3 before:rounded-[1px] before:drop-shadow-2xl before:bg-accent before:-ml-6 before:mt-[7px]"
			>
				Our Story
			</h6>
			<h2
				class="about-text flex flex-wrap text-5xl pt-12 text-primary dark:text-white drop-shadow-2xl text-center justify-center leading-[85px] transition-all duration-[0.5s] ease-in-out {y >
				500
					? 'scale-100'
					: 'scale-0'}"
			>
				<span>Explore our remote digital&nbsp;<!--Welcome to our digital studio!--></span>
				<img src={welImg1} alt="" />
				<span>&nbsp;workspace!&nbsp;</span>
				<span>&nbsp;We excel in crafting visually mesmerizing&nbsp;</span>
				<span>&nbsp;web&nbsp;</span>
				<img src={welImg1} alt="" />
				<span>&nbsp;experiences, Designing&nbsp;</span>
				<span>&nbsp;distinctive&nbsp;</span>
				<img src={welImg1} alt="" />
				<span>&nbsp;logos & brand identities,&nbsp;</span>
				<span>&nbsp;and Fortifying digital&nbsp;</span>
				<img src={welImg1} alt="" />
				<span>&nbsp;fortress via&nbsp;</span>
				<span>&nbsp;security assessments</span>
			</h2>
		</div>
	</div>
</section>

<style>
	.about-text > span {
		@apply relative inline-block text-center justify-center transition-all duration-[0.5s] ease-in-out;
	}

	.about-text > img {
		@apply h-[62px] rounded-full my-3 py-1 overflow-hidden drop-shadow-2xl transition-all duration-[0.5s] delay-150 ease-in-out;
	}
</style>
