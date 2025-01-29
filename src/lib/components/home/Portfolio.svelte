<script lang="ts">
	import { portfolios } from '$lib/stores/store';

	import { fly } from 'svelte/transition';

	import portfolio1 from '$lib/assets/images/portfolio/project-1.jpg';
	//import portfolio2 from '$lib/assets/images/portfolio/project-1.jpg';
	import portfolio3 from '$lib/assets/images/portfolio/project-2.jpg';
	import portfolio4 from '$lib/assets/images/portfolio/web-app-portfolio-1.jpg';

	portfolios.set([
		{
			id: 1,
			name: 'All',
			isActive: true,
			portfolio: []
		},
		{
			id: 2,
			name: 'Offensive Security',
			isActive: false,
			portfolio: [
				{
					id: 1,
					title: '[Confidential Corp] Audit Executive Report',
					link: '/',
					tag: 'Assessment / Testing',
					description:
						'Conduct Vulnerability Assessment and create excutive remediation report on [confidential corp] company digital assets',
					imageUrl: portfolio1
				}
			]
		},
		{
			id: 3,
			name: 'Defensive Security',
			isActive: false,
			portfolio: [
				/*
				{
					id: 1,
					title: 'ExampleCorp Audit Executive Report',
					link: '/',
					tag: 'Monitoring / Threat Detection',
					description: 'ExampleCorp Audit Executive Report',
					imageUrl: portfolio2
				}
				*/
			]
		},
		{
			id: 4,
			name: 'Web Application Security',
			isActive: false,
			portfolio: [
				{
					id: 1,
					title: 'Web Application Security Testing',
					link: '/',
					tag: 'Assessment / Testing',
					description: 'Web Application Security Testing',
					imageUrl: portfolio3
				}
			]
		},
		{
			id: 5,
			name: 'Web Application Develpment',
			isActive: false,
			portfolio: [
				{
					id: 1,
					title: 'Trezzure Ecommerce Store',
					link: 'https://trezzure.vercel.app/',
					tag: 'Web Application / Website',
					description: 'Headless ecommerce storefront based on saleor API',
					imageUrl: portfolio4
				}
			]
		}
	]);

	portfolios.update(($portfolios) => {
		const updatedPortfolios = [...$portfolios];
		updatedPortfolios[0].portfolio = $portfolios
			.slice(1)
			.map((cat) => cat.portfolio)
			.flat();
		return updatedPortfolios;
	});

	const activeTab = (id: number) => {
		portfolios.update((categories) => {
			return categories.map((category) => ({
				...category,
				isActive: category.id === id
			}));
		});
	};
</script>

<section class="relative bg-banner py-[150px] dark:bg-darkbanner">
	<div class="container">
		<!-- start heading -->
		<div class="m-[0_auto] mb-[50px]">
			<h6
				class="mb-8 pl-7 font-kanit font-medium text-accent drop-shadow-xl before:absolute before:-ml-6 before:mt-[7px] before:h-3 before:w-3 before:rounded-[1px] before:bg-accent before:drop-shadow-sm before:content-['']"
			>
				Our Portfolio
			</h6>
			<h2
				class="relative mb-0 block text-start font-titillium text-[55px] font-bold drop-shadow-xl"
			>
				Some Recent Work
			</h2>
		</div>
		<!-- end heading -->
		<div class="row overflow-hidden">
			<div class="col-12">
				<ul class="mb-[100px] flex flex-row gap-10 p-0">
					{#each $portfolios as category}
						<li>
							<button
								onclick={() => activeTab(category.id)}
								class="{category.isActive === true
									? 'text-accent'
									: 'text-body dark:text-light'} font-titillium text-lg font-bold capitalize tracking-wide transition-all duration-[0.4s] ease-in-out hover:text-accent"
								>{category.name}</button
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="col-12">
				<div class="relative grid grid-cols-3 gap-7">
					{#each $portfolios.find((category) => category?.isActive === true)?.portfolio ?? [] as category}
						<a
							href={category.link}
							target={category.link !== '/' ? '_blank' : ''}
							class="group flex flex-col"
							aria-label="protfolio-link"
							transition:fly={{ y: 100, duration: 500 }}
						>
							<div class="relative">
								<div
									class="absolute h-[585px] w-full transition-all duration-[0.4s] ease-in-out group-hover:bg-accent/15"
								></div>
								<img src={category?.imageUrl} alt="" class="h-[585px] w-full" />
							</div>

							<div class="mx-[30px] mt-[30px]">
								<h6
									class="font-titillium tracking-wide transition-all duration-[0.4s] ease-in-out group-hover:text-accent"
								>
									{category.title}
								</h6>
								<span class="text-base text-accent">{category.tag}</span>
								<p
									class="text-base text-body transition-all duration-[0.4s] ease-in-out group-hover:text-primary dark:text-light group-hover:dark:text-white"
								>
									{category.description}
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
