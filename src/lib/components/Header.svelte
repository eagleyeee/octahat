<script>
	export let logoWhite, logoDark, onToggleDarkMode;
	let y;
</script>

<svelte:window bind:scrollY={y} />
<!--transition:fade={{ delay: 250, duration: 300 }}-->
<header
	class="w-full !fixed z-[999] left-0 transition-all duration-[0.5s] ease-in-out
	{y == 0
		? 'top-0 bg-transparent'
		: y > 1 && y < 675
			? 'top-[-110px] opacity-0 bg-banner dark:bg-darkbanner'
			: 'top-0 opacity-100 bg-banner dark:bg-darkbanner shadow-lg'}"
>
	<div class="xl:relative">
		<div class="container">
			<div class="flex relative items-center flex-wrap justify-between h-[90px]">
				<div class="xl:flex xl:h-full xl:items-center xl:justify-center">
					<a class="block dark:hidden transition-all duration-[0.5s] ease-in-out" href="/">
						<img class="max-h-[45px] max-w-28" src={logoDark} alt="Logo Dark" />
					</a>
					<a class="hidden dark:block transition-all duration-[0.5s] ease-in-out" href="/">
						<img class="max-h-[45px] max-w-28" src={logoWhite} alt="Logo White" />
					</a>
				</div>
				<div class="flex items-center h-full">
					<div class="xl:flex xl:items-center xl:h-full xl:leading-[1.6em] xl:text-sm font-medium">
						<ul class="main-nav xl:!flex xl:flex-wrap xl:h-auto m-0 p-0 list-none">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/">Services</a>
								<!--<ul>
									<li>
										<a href="service.html">Services</a>
									</li>
									<li>
										<a href="service-dark.html">Services Dark</a>
									</li>
									<li>
										<a href="service-details.html">Service Details</a>
									</li>
									<li>
										<a href="service-details-dark.html">Service Details Dark</a>
									</li>
								</ul>
								<span class="cs_munu_dropdown_toggle"></span>-->
							</li>
							<li>
								<a href="/">Portfolio</a>
							</li>
						</ul>
						<span class="cs_munu_toggle"><span></span></span>
					</div>
					<div class="ml-4 justify-center items-center align-middle">
						<span
							class="flex justify-center items-center w-11 h-7 transition-all duration-[0.3s] ease-in-out rounded-[50%] cursor-pointer text-primary -mr-2.5"
						>
							<button class="h-6" on:click={onToggleDarkMode}>
								<span
									class="icon-[ic--outline-dark-mode] dark:icon-[ic--outline-light-mode] text-primary dark:text-white hover:text-accent dark:hover:text-accent text-2xl leading-[0] cursor-pointer relative hover:rotate-45 active:scale-50 active:-rotate-45 transition-all duration-[0.3s] ease-in-out"
								></span>
							</button>
						</span>
					</div>
					<div class="ml-4">
						<span
							class="flex justify-center items-center w-11 h-6 overflow-hidden top-[-8px] transition-all duration-[0.3s] ease-in-out cursor-pointer text-white -mr-2.5"
						>
							<span
								class="group main-bread w-[24px] h-[20px] leading-[0] cursor-pointer relative text-left hover:translate-y-[8px] transition-all duration-[0.5s] ease-in-out rotate-180"
							>
								<span class="bg-primary dark:bg-white group-hover:bg-accent"></span>
								<span class="bg-primary dark:bg-white group-hover:bg-accent"></span>
								<span class="bg-primary dark:bg-white group-hover:bg-accent"></span>
								<span class="bg-primary dark:bg-white group-hover:bg-accent"></span>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<!--test-end-->

<style>
	.main-nav > li {
		@apply xl:relative xl:mr-8 xl:h-auto text-primary dark:text-white tracking-wide font-normal;
	}

	.main-nav > li:last-child {
		@apply xl:mr-0;
	}

	.main-nav > li > a {
		@apply xl:relative xl:p-[10px_0] xl:inline-flex xl:h-auto xl:items-center xl:uppercase font-normal;
	}

	.main-bread > span {
		@apply inline-block absolute h-[2.5px] w-full rounded-[6px] text-inherit align-top transition-all duration-[0.5s] ease-in-out;
	}

	.main-bread > span:nth-child(1) {
		@apply translate-x-0 translate-y-0 w-[calc(100%-12px)];
	}

	.main-bread > span:nth-child(2) {
		@apply translate-x-0 translate-y-[8px] w-[calc(100%-6px)];
	}

	.main-bread > span:nth-child(3) {
		@apply translate-x-0 translate-y-[16px] w-full;
	}

	.main-bread > span:nth-child(4) {
		@apply translate-x-0 translate-y-[24px] w-[calc(100%-6px)];
	}
</style>
