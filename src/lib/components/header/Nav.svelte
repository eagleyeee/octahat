<script lang="ts">
	const menuLinks = [
		{ id: 0, title: '', url: '' }
		//{ id: 1, title: 'Home', url: '/' },
		//{ id: 2, title: 'About', url: '/about' },
		//{ id: 3, title: 'Services', url: '/services' },
		//{ id: 4, title: 'Portfolio', url: '/portfolio' }
		//{ id: 5, title: 'Blog', url: '/blog' }
	];
</script>

<ul class="main-nav m-0 list-none px-2 xl:!flex xl:h-auto xl:flex-wrap">
	{#each menuLinks ?? [] as item}
		<li class="xl:relative xl:mr-8 xl:h-auto">
			<a
				href={item.url}
				class="!cursor-none font-titillium font-semibold tracking-wide text-primary drop-shadow-xl transition-all duration-[0.3s] ease-in-out dark:text-white xl:relative xl:inline-flex xl:h-auto xl:items-center xl:p-[10px_0] xl:uppercase"
				>{item.title}</a
			>
		</li>
	{/each}
</ul>

<style>
	.main-nav > li:last-child {
		@apply xl:mr-0;
	}
</style>
