<script>
	import serviceCover from '$lib/assets/images/services.jpg';
</script>

<section class="my-[150px]">
	<div class="container">
		<!-- start heading -->
		<div class="mb-[100px] m-[0_auto]">
			<h6
				class="pl-7 mb-8 text-accent drop-shadow-2xl before:content-[''] before:absolute before:h-3 before:w-3 before:rounded-[1px] before:drop-shadow-2xl before:bg-accent before:-ml-6 before:mt-[7px]"
			>
				Our Services
			</h6>
			<h2 class="text-[55px] drop-shadow-2xl mb-0 font-[900]">
				<div
					style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 646.5px 32.9998px; transform: translate3d(0px, 0px, 0px); opacity: 1;"
				>
					Extensive Digital Services
				</div>
			</h2>
		</div>
		<!-- end heading -->
		<div class="row mx-[-70px]">
			<div class="col-6 mb-6 px-[70px]">
				<div class="h-full">
					<img src={serviceCover} class="h-full" alt="" />
				</div>
			</div>
			<div class="col-6 px-[70px]">
				<div class="services-card">
					<span class="mb-10">
						<div class="service flex">
							<div class="flex-1 p-0">
								<div class="max-w-[510px]">
									<h2 class="m-0 text-[28px]">
										<a href="/" class="">
											<span class="text-base">01 /</span> Web Application Development</a
										>
									</h2>
								</div>
							</div>
							<div class="-translate-y-1/2">
								<a href="#" class="relative block h-[30px] w-[30px] overflow-hidden rotate-45">
									<span>
										<svg
											width="20"
											height="20"
											viewBox="0 0 30 30"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
												fill="currentColor"
											></path>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
												fill="currentColor"
											></path>
										</svg>
									</span>
									<span>
										<svg
											width="20"
											height="20"
											viewBox="0 0 30 30"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
												fill="currentColor"
											></path>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
												fill="currentColor"
											></path>
										</svg>
									</span>
								</a>
							</div>
						</div>
						<div
							class="content-[''] w-full border-t-2 border-[#101010] dark:border-[#d9d9d9]"
						></div>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.services-card > div.service {
		@apply relative flex items-center;
	}
</style>
