<script>
	import heroAnimatedBanner from '$lib/assets/images/creative-animated-banner.gif';
	//import heroBanner from '$lib/assets/images/creative_banner-4.jpg';

	import heroCreativeImage from '$lib/assets/images/creative.png';

	let y = $state(0);

	/*
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	
	onMount(() => {
		const t1 = gsap.timeline({ defaults: { ease: Power2.easeInOut } });
		t1.fromTo('h1', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
	});
	*/
</script>

<section>
	<div class="relative z-10 min-h-[100vh] overflow-hidden bg-banner dark:bg-darkbanner">
		<div class="absolute flex w-full flex-row-reverse overflow-hidden">
			<!-- absolute w-full right-0 h-full overflow-hidden -->
			<!-- absolute w-[54%] right-0 h-full -->
			<!--  bg-gradient-to-r from-banner to-accent/45     bg-[linear-gradient(90deg,#f4f4f4,rgb(0,151,178,0.45))] dark:bg-[linear-gradient(90deg,#181818,rgb(0,151,178,0.45))]-->

			<!--<img src={heroCreativeImage} class="z-20 w-[54%] border-0" alt="hero-banner" />-->
			<div
				class="absolute z-30 h-full w-full bg-gradient-to-r from-banner via-banner to-accent/45 backdrop-blur-[1.5px] dark:from-darkbanner dark:via-darkbanner dark:to-accent/40"
			></div>
			<img src={heroAnimatedBanner} class="z-20 w-full scale-100 border-0" alt="animated-banner" />

			<!--
			<video
				class="max-w-full !h-full !w-full border-0 scale-[1.58] z-20"
				height="auto"
				width="auto"
				autoplay
				muted
				loop
			>
				<source src={heroVideoBanner} type="video/webm" />
				<track kind="captions" />
			</video>
			-->
		</div>
		<div class="container">
			<div class="relative inset-0 z-40 px-0 py-40 uppercase 2xl:py-56">
				<div class="mb-5 inline-block">
					<h6
						class="mb-0 border-b-2 border-accent font-kanit font-medium normal-case leading-[27px] text-accent drop-shadow-xl transition-all duration-[0.3s] ease-in-out dark:text-accent {y >
						150
							? '-translate-y-full scale-0'
							: 'sacale-100 translate-y-0'}"
					>
						<!--Defend & Protect & -->
						Defend your digital fortress with OctaHat!
					</h6>
				</div>
				<div class="inline-block">
					<h1
						class="flex w-[75%] flex-wrap gap-1 font-titillium text-3xl font-bold normal-case leading-9 text-primary drop-shadow-xl transition-all duration-[0.4s] ease-in-out dark:text-white md:text-4xl lg:gap-2 lg:text-5xl lg:leading-[48px] xl:gap-4 xl:text-6xl xl:leading-[72px]"
					>
						<span class="relative inline-block">Startup Sprint</span>
						<img
							class="mt-1 h-9 overflow-hidden rounded-full drop-shadow-xl lg:mt-2 lg:h-[48px] xl:mt-[14px] xl:h-[62px]"
							src={heroCreativeImage}
							alt=""
						/>

						<!--<span class="relative inline-block">Accelerating &  </span>-->
						<span class="relative inline-block">Fortifying Your Cyberspace</span>
						<span class="relative inline-block">Via Proactive Security</span>
						<span class="relative inline-block">Operations</span>
					</h1>
				</div>
				<a
					href="/"
					aria-label="about"
					class="relative top-14 drop-shadow-xl transition-all delay-150 duration-[0.5s] ease-in-out"
				>
					<i
						class="icon-[ri--scroll-to-bottom-line] animate-bounce text-4xl text-primary drop-shadow-xl transition-all duration-[0.3s] ease-in-out dark:text-white"
					></i>
				</a>
			</div>
		</div>
	</div>
</section>
