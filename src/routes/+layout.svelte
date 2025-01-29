<script lang="ts">
	let { children } = $props();

	import '$lib/styles/app.css';

	import logoDark from '$lib/assets/images/logo-dark.png';
	import logoLight from '$lib/assets/images/logo-white.png';

	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileMenu from '$lib/components/header/MobileMenu.svelte';
	import ScrollTop from '$lib/components/ScrollTop.svelte';
	import Cursor from '$lib/components/shared/Cursor.svelte';

	import Loader from '$lib/components/shared/Loader.svelte';

	//import { navigating, page } from '$app/stores';
	import { classList } from 'svelte-body';
	import { onMount } from 'svelte';

	/*import gsap from 'gsap';

	import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';*/

	let isDark = $state(false);
	let isOpenMobileMenu = $state(false);

	let isPageLoaded = $state(false);

	onMount(() => {
		isPageLoaded = true;
	});

	const toggleColorMode = () => {
		isDark = !isDark;

		isDark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	const toggleMobileMenu = () => {
		isOpenMobileMenu = !isOpenMobileMenu;
	};

	/*if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	}

	let smoother: any = $state();*/

	/*let main: any = $state();
	let smoother: any = $state();

	onMount(() => {
		const ctx = gsap.context(() => {
			smoother = ScrollSmoother.create({
				smooth: 2, // seconds it takes to "catch up" to native scroll position
				effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
			});
			ScrollTrigger.create({
				trigger: '#about',
				pin: true,
				start: 'top center',
				end: '+=300',
				markers: true
			});
		}, main); // <- Scope!

		return () => ctx.revert(); // <- Cleanup!
	});

	const scrollTo = () => {
		smoother && smoother.scrollTo('#about', true, 'top center');
	};*/

	$effect(() => {
		console.log(isDark);
		console.log(isOpenMobileMenu);
	});

	/*onMount(() => {
		smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true
		});
	});*/
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300;400;500;600;700;800;900&family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Unbounded:wght@200;300;400;500;600;700;800;900&family=Titillium+Web:wght@200;300;400;600;700;900&display=swap"
		rel="stylesheet"
	/>
	<title>OctaHat - Fortify the unbridled brilliance of cyberspace!</title>
</svelte:head>

<svelte:body use:classList={'!scroll-smooth !overscroll-none select-none'} />
<!--<Cursor />-->

<!--<Header {logoDark} {logoWhite} onToggleDarkMode={() => (isDark = !isDark)} />-->
{#if !isPageLoaded}
	<Loader />
{/if}

<Cursor {isDark} />

<Header {logoDark} {logoLight} onToggleColorMode={toggleColorMode} {isOpenMobileMenu}>
	{#snippet toggleMobileMenuButton()}
		<button
			onclick={toggleMobileMenu}
			aria-label="toggle-mobile-menu"
			class="ml-6 flex size-8 items-center justify-center align-middle"
		>
			<!--
			<button
			onclick={toggleMobileMenu}
			aria-label="toggle-mobile-menu"
			class={isOpenMobileMenu === true
				? 'z-[999] size-6'
				: 'menu-button hoverable group relative size-6 translate-y-[-8px] text-right align-middle leading-[0] transition-all duration-[0.3s] ease-in-out hover:translate-y-0'}
		>


			{#if isOpenMobileMenu === true}
				<span
					class="icon-[ri--close-circle-line] relative size-[24px] text-[24px] text-primary transition-all duration-[0.3s] ease-in-out hover:rotate-90 dark:text-white"
				></span>
			{:else}
				<span class="child-1 bg-primary dark:bg-white"></span>
				<span class="child-2 bg-primary dark:bg-white"></span>
				<span class="child-3 bg-primary dark:bg-white"></span>
				<span class="child-4 bg-primary dark:bg-white"></span>
			{/if}
			-->
			<span
				class="{isOpenMobileMenu === true
					? 'icon-[ri--close-circle-line]'
					: 'icon-[ri--menu-4-line]'} relative size-6 text-[24px] text-primary transition-all duration-[0.3s] ease-in-out hover:rotate-180 active:-rotate-180 dark:text-white"
			></span>
		</button>
	{/snippet}
</Header>
{#if isOpenMobileMenu}
	<MobileMenu />
{/if}

{@render children()}

<Footer {logoDark} {logoLight} />

<ScrollTop />

<style>
	:global(body) {
		cursor: none !important;
	}

	/*.menu-button > span {
		@apply relative inline-block h-[2.6px] rounded-[2px] align-middle text-inherit transition-all duration-[0.5s] ease-in-out;
	}

	.menu-button > span.child-1 {
		@apply w-[calc(100%-12px)] translate-x-0 translate-y-[-11px];
	}

	.menu-button > span.child-2 {
		@apply w-[calc(100%-6px)] translate-x-0 translate-y-0;
	}

	.menu-button > span.child-3 {
		@apply w-full translate-x-0 translate-y-[11px];
	}

	.menu-button > span.child-4 {
		@apply w-[calc(100%-6px)] translate-x-0 translate-y-[22px];
	}*/
</style>
