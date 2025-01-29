<script lang="ts">
	import Nav from '$lib/components/header/Nav.svelte';

	import type { Snippet } from 'svelte';

	interface Props {
		logoLight: string;
		logoDark: string;
		onToggleColorMode: () => void;
		isOpenMobileMenu: boolean;
		toggleMobileMenuButton: Snippet;
	}

	let { logoLight, logoDark, onToggleColorMode, toggleMobileMenuButton, isOpenMobileMenu }: Props =
		$props();
	let y: number = $state(0);
</script>

<svelte:window bind:scrollY={y} />
<!--transition:fade={{ delay: 250, duration: 300 }}-->
<header
	class="!fixed inset-x-0 z-[999] w-full transition-all duration-[0.5s] ease-in-out
	{y === 0
		? isOpenMobileMenu === true
			? 'top-0 bg-banner bg-opacity-90 shadow-none backdrop-blur-md dark:bg-darkbanner'
			: 'top-0 bg-transparent'
		: y > 1 && y < 675
			? isOpenMobileMenu === true
				? 'top-0 bg-banner bg-opacity-90 shadow-none backdrop-blur-md dark:bg-darkbanner'
				: 'top-[-110px] opacity-0'
			: isOpenMobileMenu === true
				? 'top-0 bg-banner bg-opacity-90 shadow-none backdrop-blur-md dark:bg-darkbanner'
				: 'top-0 bg-banner bg-opacity-90 shadow-lg backdrop-blur-md dark:bg-darkbanner'}"
>
	<div class="xl:relative">
		<div class="container-wide">
			<div class="relative flex h-[90px] flex-wrap items-center justify-between">
				<div class="xl:flex xl:h-full xl:items-center xl:justify-center">
					<a class="block dark:hidden" href="/">
						<img
							class="v max-h-[45px] max-w-28 transition-all duration-[0.3s] ease-in-out"
							src={logoDark}
							alt="Logo Dark"
						/>
					</a>
					<a class="hidden dark:block" href="/">
						<img
							class="max-h-[45px] max-w-28 transition-all duration-[0.3s] ease-in-out"
							src={logoLight}
							alt="Logo White"
						/>
					</a>
				</div>
				<div class="flex h-full items-center">
					{#if !isOpenMobileMenu}
						<div
							class="hidden font-medium xl:flex xl:h-full xl:items-center xl:text-sm xl:leading-[1.6em]"
						>
							<Nav />
						</div>
					{/if}
					<button
						class="ml-6 flex size-8 items-center justify-center align-middle"
						onclick={onToggleColorMode}
						aria-label="toggleDarkColorMode"
					>
						<span
							class="icon-[ri--sun-line] relative size-6 text-[24px] text-primary transition-all duration-[0.3s] ease-in-out dark:icon-[ri--moon-line] hover:rotate-45 active:-rotate-45 dark:text-white"
						></span>
					</button>

					{@render toggleMobileMenuButton()}
				</div>
			</div>
		</div>
	</div>
</header>

<!--test-end-->
