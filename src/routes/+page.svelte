<script>
	import Hero from '$lib/components/Hero.svelte';

	import welImg1 from '$lib/assets/images/creative-2.png';
</script>

<Hero />

<section class="my-[150px]">
	<div class="container">
		<div class="max-w-[1122px] text-center m-[0_auto]">
			<h2 class="text-5xl text-primary dark:text-white text-center justify-center leading-[85px]">
				<span class="flex flex-row flex-wrap gap-2 text-center justify-center">
					<span class="relative block transition-all duration-[0.5s] ease-in-out"
						>Explore our digital studio!<!--Welcome to our digital studio!--></span
					>
					<img
						class="h-[52px] my-4 rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out"
						src={welImg1}
						alt=""
					/>
				</span>
				<span class="flex flex-row gap-2 text-center justify-center">
					<span class="relative block transition-all duration-[0.5s] ease-in-out"
						>We excel in crafting visually mesmerizing web experiences</span
					>
					<img
						class="flex h-[52px] my-4 rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out"
						src={welImg1}
						alt=""
					/>
				</span>, Designing distinctive logos & brand identities
				<img
					class="h-[52px] my-4 rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out"
					src={welImg1}
					alt=""
				/>, and Fortifying digital fortress via security assessments
				<img
					class="h-[52px] my-4 rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out"
					src={welImg1}
					alt=""
				/>
			</h2>
		</div>
	</div>
</section>

<section class="overflow-hidden bg-accent font-bold normal-case py-[1rem]">
	<div class="flex nowrap whitespace-nowrap min-w-full">
		<h4
			class="flex shrink-0 items-center p-[5px_0px] text-primary dark:text-white !mb-0 animate-infinite-scroll"
		>
			<span class="icon-[typcn--flash-outline] align-middle"></span> &nbsp;Unleash the unbridled
			brilliance of cyberspace&nbsp;

			<span class="icon-[typcn--flash-outline] align-middle"></span> &nbsp;Propelling brands through
			creative design&nbsp;
		</h4>
		<!-- svelte-ignore a11y-hidden -->
		<h4
			class="flex shrink-0 items-center p-[5px_0px] text-primary dark:text-white !mb-0 animate-infinite-scroll"
			aria-hidden="true"
		>
			<span class="icon-[typcn--flash-outline] align-middle"></span> &nbsp;Unleash the unbridled
			brilliance of cyberspace&nbsp;

			<span class="icon-[typcn--flash-outline] align-middle"></span> &nbsp;Propelling brands through
			creative design&nbsp;
		</h4>
	</div>
</section>
