<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<section
	transition:fly={{ y: -400, duration: 500 }}
	class="fixed right-0 top-[90px] z-[998] h-[100vh] w-full bg-banner bg-opacity-90 shadow-lg backdrop-blur-md transition-all duration-[0.5s] ease-in-out dark:bg-darkbanner"
>
	<div
		class="container-wide relative ml-auto h-screen w-full overflow-hidden text-primary transition-all duration-[0.4s] ease-in-out dark:text-white"
	>
		<div class="row !items-end">
			<div class="col-7">
				<div
					class="h-[87vh] overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				>
					<div class="mobile-menu">
						<ul>
							<!--
							<li>
								<a href="index.html">Home</a>
								<span class=""></span>
							</li>
							-->
							<li>
								<a href="/">About</a>
								<span class=""></span>
							</li>
							<li>
								<a href="/">Services</a>
								<span class=""></span>
							</li>
							<li>
								<a href="/">Portfolio</a>
								<span class=""></span>
							</li>
							<li>
								<a href="/">Blog</a>
								<span class=""></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-4">
				<div class="mb-20">
					<div>
						<p class="mb-[18px] mt-0 flex flex-row gap-1">
							<span class="icon-[ri--map-pin-line] mt-1"></span>
							<span class="!ml-2 font-titillium font-semibold uppercase tracking-wide"
								>Suite 410, 1515 Mockingbird Ln, <br />Charlotte, NC 28209, United States</span
							>
						</p>
						<p class="mb-[18px] mt-0 flex flex-row gap-1">
							<span class="icon-[ri--map-pin-line] mt-1"></span>
							<span class="!ml-2 font-titillium font-semibold uppercase tracking-wide"
								>TechSpark CoWorking Space, Railway <br />Road, Bahawalpur, Punjab 63100,
								<br />Pakistan</span
							>
						</p>

						<h4 class="mt-0 flex flex-row gap-1">
							<a href="mailto:info@octahat.com">
								<span class="icon-[ic--baseline-alternate-email] -mb-[6px]"></span>
								<span class="!ml-2 font-titillium">info@octahat.com</span>
							</a>
						</h4>

						<h4 class="mt-0 flex flex-row gap-1">
							<a href="tel:(406)555-0120">
								<span class="icon-[ri--phone-line] -mb-[6px]"></span>
								<span class="!ml-2 font-titillium tracking-tighter">+92 (315) 283-1710</span>
							</a>
						</h4>

						<div class="social flex flex-row gap-10 text-primary dark:text-white">
							<a
								href="https://www.linkedin.com/company/octahat"
								aria-label="linkedin"
								target="_blank"><span class="icon-[ant-design--linkedin-outlined]"></span></a
							>
							<a href="https://www.instagram.com/octahat/" aria-label="instagram" target="_blank"
								><span class="icon-[ant-design--instagram-outlined]"></span></a
							>
							<a href="https://www.facebook.com/octahat/" aria-label="facebook" target="_blank"
								><span class="icon-[ant-design--facebook-outlined]"></span></a
							>
						</div>

						<hr class="my-2 me-5 border-[#454545] transition-all duration-[0.4s] ease-in-out" />
						<h2>
							<a href="mailto:info@email.com" class=""
								><span class="font-titillium font-extrabold tracking-wide">info@octahat.com</span
								></a
							>
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mobile-menu > ul {
		@apply relative list-none p-0 leading-[65px];
	}

	.mobile-menu > ul > li {
		@apply relative mt-10 font-titillium text-[2.5rem] font-bold uppercase;
	}

	.mobile-menu > ul > li > a {
		@apply relative;
	}

	.social > a > span {
		@apply size-9 text-4xl;
	}
</style>
