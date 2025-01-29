<script lang="ts">
	interface Props {
		logoLight: string;
		logoDark: string;
	}

	let { logoLight, logoDark }: Props = $props();
</script>

<footer class="bg-banner text-primary dark:bg-darkbanner dark:text-white">
	<div class="container pt-[150px]">
		<div class="row mb-[90px]">
			<div class="col-5">
				<div>
					<a class="mb-5 block w-fit dark:hidden" href="/">
						<img
							class="max-h-[45px] max-w-28 transition-all duration-[0.5s] ease-in-out"
							src={logoDark}
							alt="Logo White"
						/>
					</a>
					<a class="mb-5 hidden w-fit dark:block" href="/">
						<img
							class="max-h-[45px] max-w-28 transition-all duration-[0.5s] ease-in-out"
							src={logoLight}
							alt="Logo White"
						/>
					</a>

					<p
						class="tra mb-[50px] font-titillium text-base font-semibold tracking-normal transition-all duration-[0.4s] ease-in-out"
					>
						Fortify the unbridled brilliance of cyberspace!
					</p>
					<a
						href="mailto:contact@octahat.com"
						class="inline-block font-titillium text-4xl font-extrabold leading-[1.2em] tracking-wide text-primary transition-all duration-[0.5s] ease-in-out hover:text-accent dark:text-white dark:hover:text-accent"
						><span>info@octahat.com</span>
					</a>
				</div>
			</div>
			<div class="col-6 ml-[8.33333333%]">
				<div class="social mb-[60px] grid grid-cols-8 gap-[15px_30px] text-primary dark:text-white">
					<a href="https://www.linkedin.com/company/octahat" aria-label="linkedin" target="_blank"
						><span class="icon-[ant-design--linkedin-outlined]"></span></a
					>
					<a href="https://www.instagram.com/octahat/" aria-label="instagram" target="_blank"
						><span class="icon-[ant-design--instagram-outlined]"></span></a
					>
					<a href="https://www.facebook.com/octahat/" aria-label="facebook" target="_blank"
						><span class="icon-[ant-design--facebook-outlined]"></span></a
					>
				</div>
				<ul class="contact m-[-10px_-20px] flex list-none flex-wrap p-0 text-base leading-[1.6em]">
					<!--<li>
						<span class="icon-[ic--outline-location-on]"></span> 46 JOHN ST TORONTO ON M5V 3W2
					</li>-->
					<li class="tracking-tight">
						<span class="icon-[ri--phone-line] text-primary dark:text-white"></span> +92 (315) 283-1710
					</li>
					<li class="tracking-wide">
						<!--outline-email-->
						<span class="icon-[ic--baseline-alternate-email] text-primary dark:text-white"></span> info@octahat.com
					</li>
				</ul>
			</div>
		</div>
		<!--
		<ul
			class="footer-nav m-0 flex list-none flex-wrap justify-center p-[0_0_40px_0] text-sm uppercase leading-[1.6em] text-primary dark:text-white"
		>
			<li><a href="/">HOME</a></li>
			<li><a href="/">ABOUT</a></li>
			<li><a href="/">SERVICES</a></li>
			<li><a href="/">PORTFOLIO</a></li>
			<li><a href="/">BLOG</a></li>
		</ul>
		-->
	</div>
	<div class="border-t border-solid border-t-body p-[35px_0] text-center text-base">
		<div class="container font-kanit tracking-wide transition-all duration-[0.3s] ease-in-out">
			<span class="text-sm">&#9400;&nbsp;</span>OctaHat 2025. All Right reserved
		</div>
	</div>
</footer>

<style>
	.social > a {
		@apply flex items-center justify-center;
	}

	.social > a > span {
		@apply text-4xl transition-all duration-[0.2s] ease-in-out;
	}

	.contact > li {
		@apply relative m-[10px_20px] max-w-[200px] pl-[30px] font-titillium text-base font-semibold transition-all duration-[0.5s] ease-in-out;
	}

	.contact > li > span {
		@apply absolute left-0 top-1 flex text-xl transition-all duration-[0.5s] ease-in-out;
	}

	/*.footer-nav > li {
		@apply m-[5px_25px] font-titillium font-semibold tracking-wide transition-all duration-[0.2s] ease-in-out;
	}*/
</style>
