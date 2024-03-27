<script>
	import heroBanner from '$lib/assets/images/creative_banner-4.jpg';
	import heroTextBanner from '$lib/assets/images/creative.png';

	let y;
</script>

<svelte:window bind:scrollY={y} />

<section>
	<div class="relative min-h-[100vh] bg-banner dark:bg-darkbanner z-10 overflow-hidden">
		<div class="absolute w-[54%] right-0 h-full">
			<div
				class="absolute max-w-full h-full w-full bg-gradient-to-r from-banner to-accent/45 dark:from-darkbanner dark:to-accent/40 backdrop-blur-[2px]"
			></div>

			<img src={heroBanner} class="max-w-full !h-full !w-full border-0" alt="Creative Banner" />
		</div>
		<div class="container">
			<div class="absolute uppercase py-[225px] px-0 z-[12]">
				<div class="inline-block mb-5">
					<h6
						class="mb-0 text-accent border-b-2 border-accent normal-case leading-[27px] transition-all duration-[0.5s] ease-in-out {y >
						150
							? '-translate-y-full scale-0'
							: 'translate-y-0 sacale-100'}"
					>
						Elevate your digital presence with us!
					</h6>
				</div>
				<div class="inline-block">
					<h1
						class="flex flex-wrap gap-4 font-[900] text-6xl leading-[72px] normal-case w-[75%] text-primary dark:text-white transition-all duration-[0.5s] ease-in-out"
					>
						<span
							class="relative inline-block transition-all duration-[0.5s] ease-in-out {y > 200
								? '-translate-x-full scale-0'
								: 'translate-x-0 sacale-100'}">Startup Sprint</span
						>
						<img
							class="h-[62px] rounded-full overflow-hidden transition-all duration-[0.5s] ease-in-out {y >
							200
								? 'scale-0'
								: 'sacale-100'}"
							src={heroTextBanner}
							alt=""
						/>

						<span
							class="relative inline-block transition-all duration-[0.5s] ease-in-out {y > 275
								? '-translate-x-full scale-0'
								: 'translate-x-0 sacale-100'}"
							>Accelerating & Fortifying
						</span>
						<span
							class="relative inline-block transition-all duration-[0.5s] ease-in-out {y > 350
								? '-translate-x-full scale-0'
								: 'translate-x-0 sacale-100'}">your Cyberspace</span
						>
					</h1>
				</div>
			</div>
			<a
				href="/#next"
				class="absolute top-[600px] {y > 375
					? 'translate-y-full scale-0'
					: 'translate-y-0 sacale-100'}"
			>
				<span
					class="text-primary dark:text-white text-[42px] icon-[ic--round-keyboard-double-arrow-down] cursor-pointer transition-all duration-[0.5s] ease-in-out animate-bounce"
				></span>
			</a>
		</div>
	</div>
</section>
<!--
	<div class="anim_banner_text_left">
					<h1 class="font-extrabold text-8xl">
						<div style="position:relative;display:inline-block;">
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								S
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								t
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								a
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								r
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								t
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								u
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								p
							</div>
						</div>
						<div style="position:relative;display:inline-block;">
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								S
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								p
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								r
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								i
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								n
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								t
							</div>
						</div>
						<div style="position:relative;display:inline-block;">
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								A
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								c
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								c
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								e
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								l
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								e
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								r
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								a
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								t
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								i
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								n
							</div>
							<div
								style="position: relative; display: inline-block; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
							>
								g
							</div>
						</div>
					</h1>
				</div>
-->
