<script>
	import Service from '$lib/components/shared/Service.svelte';

	import serviceCover from '$lib/assets/images/services/cyber-security-services.png';
</script>

<section class="relative bg-banner pt-[150px] dark:bg-darkbanner">
	<div class="container">
		<!-- start heading -->
		<div class="m-[0_auto] mb-[100px]">
			<h6
				class="mb-8 pl-7 font-kanit font-medium text-accent drop-shadow-xl before:absolute before:-ml-6 before:mt-[7px] before:h-3 before:w-3 before:rounded-[1px] before:bg-accent before:drop-shadow-sm before:content-['']"
			>
				Our Services
			</h6>
			<h2
				class="relative mb-0 block text-start font-titillium text-[55px] font-bold drop-shadow-xl"
			>
				Extensive Digital Services
			</h2>
		</div>
		<!-- end heading -->
		<div class="row !flex-nowrap !justify-between">
			<div class="col-6 mb-6">
				<div class="relative h-full">
					<div class="absolute h-full w-[577px] bg-accent/35"></div>
					<img src={serviceCover} class="h-full w-[577px]" alt="" />
				</div>
			</div>
			<div class="col-6">
				<div class="">
					<Service title="Vulnerability Assessment" id="1" />
					<Service title="OSINT Enhanced Reconnaissance" id="2" />
					<Service title="Bug Bounty & Ethical Hacking" id="3" />
					<Service title="Security Operations Center (SOC)" id="4" />
					<Service title="Web Application Security Testing" id="5" />
					<Service title="Headless Ecommerce Development" id="6" />
				</div>
			</div>
		</div>
	</div>
</section>
