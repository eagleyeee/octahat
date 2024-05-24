<script>
	import '$lib/assets/styles/app.css';
	import logoDark from '$lib/assets/images/logo-dark.png';
	import logoWhite from '$lib/assets/images/logo-white.png';

	//import Cursor from '$lib/components/Cursor.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import ScrollTop from '$lib/components/ScrollTop.svelte';

	import { classList } from 'svelte-body';

	let isDark = false;

	function ToggleDarkMode() {
		isDark = !isDark;

		isDark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	$: console.log(isDark);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300;400;500;600;700;800;900&family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<title>Octahat - Innovate, Elevate and Fortify Digital Frontiers</title>
</svelte:head>

<svelte:body use:classList={'!scroll-smooth !overscroll-none'} />
<!--<Cursor />-->

<!--<Header {logoDark} {logoWhite} onToggleDarkMode={() => (isDark = !isDark)} />-->

<div class="justify-center items-center h-screen hidden">
	<div
		class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400"
	>
		<div
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
		></div>
	</div>
</div>

<Header {logoDark} {logoWhite} onToggleDarkMode={ToggleDarkMode} />

<Menu />

<slot />

<Footer {logoWhite} />

<ScrollTop />
