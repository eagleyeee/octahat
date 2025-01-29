<script lang="ts">
	import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import client1 from '$lib/assets/images/clients/client-1.jpg';

	const featuredClientReviews = [
		{
			id: 1,
			name: 'Michael Carter, ',
			summary:
				'"A comprehensive security strategy that strengthened our digital infrastructure. Vulnerability Assessment and Web Application Security Testing provided by this team were invaluable to our organization. Their detailed analysis identified critical vulnerabilities, and their expert recommendations enabled us to fortify our systems against potential threats. Their professionalism and expertise make them a trusted partner in cybersecurity"',
			imageUrl: client1,
			designation: 'Information Security Manager'
		},
		{
			id: 2,
			name: 'John Reynolds',
			summary:
				'"Future-proof eCommerce with cutting-edge headless technology! Implementing a headless eCommerce store with Saleor’s API was a transformative experience for our business. This team delivered a scalable, high-performance solution that gives us full control over our frontend while leveraging Saleor’s powerful backend. Their professionalism and technical proficiency make them a trusted partner in digital commerce innovation"',
			imageUrl: client1,
			designation: 'Chief Technology Officer'
		},
		{
			id: 3,
			name: 'Sarah Mitchell',
			summary:
				'"Proactive security measures that ensure long-term resilience. We entrusted this team with our security assessment, and they exceeded expectations. Their methodical approach to identifying and mitigating vulnerabilities significantly enhanced our web application’s security. Their insights and guidance have been instrumental in strengthening our cybersecurity posture. Highly recommended for organizations seeking a robust security framework"',
			imageUrl: client1,
			designation: 'Chief Operating Officer'
		}
	];
</script>

<section class="relative overflow-hidden bg-primary py-[150px]">
	<div class="container">
		<div class="row">
			<div class="col-12 items-center">
				<div class="text-center text-light">
					<h2
						class="relative mb-[30px] block font-titillium text-5xl font-bold tracking-wide text-white drop-shadow-xl"
					>
						Hear From Our Satisfied Partners
					</h2>
					<div class="relative touch-pan-y overflow-hidden">
						<Splide
							options={{
								rewind: true,
								autoplay: true,
								type: 'loop',
								pagination: false,
								perPage: 1,
								perMove: 1,
								/*breakpoints: {
									991: {
										perPage: 2,
										perMove: 2
									},
									767: {
										perPage: 1,
										perMove: 1
									}
								},*/
								speed: 1200,
								flickMaxPages: 1,
								arrows: false,
								gap: '30px'
							}}
							hasTrack={false}
							><SplideTrack>
								{#each featuredClientReviews as client}
									<SplideSlide>
										<div class="w-full text-center align-middle">
											<span class="icon-[ri--chat-quote-line] mb-[30px] size-[74px] text-accent"
											></span>
											<blockquote
												class="mb-[25px] font-kanit text-[28px] font-normal leading-[1.6em] tracking-wide text-light"
											>
												{client.summary}
											</blockquote>
											<div class="flex flex-row items-center justify-center">
												<img src={client.imageUrl} alt={client.name} class="mr-[25px]" />
												<div class="flex flex-col text-left">
													<h3 class="mb-[6px] font-titillium text-[22px] tracking-wide text-white">
														{client.name}
													</h3>
													<span class="font-kanit text-base tracking-wide"
														>{client.designation}</span
													>
												</div>
											</div>
										</div>
									</SplideSlide>
								{/each}
							</SplideTrack>
						</Splide>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
