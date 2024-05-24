<script>
	export let logoWhite;
</script>

<footer class="bg-darkbanner text-light">
	<div class="container pt-[150px]">
		<div class="row mb-[90px]">
			<div class="col-5">
				<div>
					<a class="block mb-5" href="/">
						<img class="max-h-[45px] max-w-28" src={logoWhite} alt="Logo White" />
					</a>
					<p class="text-base mb-[50px]">
						Welcome to our digital agency We specialize in helping business most like yours succeed
						online. From website design and development.
					</p>
					<a
						href="mailto:contact@octahat.com"
						class="inline-block text-3xl text-white leading-[1.2em] font-interTight font-[900]"
						><span>contact@octahat.com</span>
					</a>
				</div>
			</div>
			<div class="col-6 ml-[8.33333333%]">
				<div class="social grid gap-[15px_30px] grid-cols-8 text-white mb-[60px]">
					<a href="https://www.facebook.com/"
						><span class="icon-[ant-design--facebook-outlined]"></span></a
					>
					<a href="https://www.linkedin.com/"
						><span class="icon-[ant-design--linkedin-outlined]"></span></a
					>
					<a href="https://www.instagram.com/"
						><span class="icon-[ant-design--instagram-outlined]"></span></a
					>
				</div>
				<ul class="contact flex flex-wrap text-base leading-[1.6em] m-[-10px_-20px] list-none p-0">
					<!--<li>
						<span class="icon-[ic--outline-location-on]"></span> 46 JOHN ST TORONTO ON M5V 3W2
					</li>-->
					<li>
						<span class="icon-[ic--outline-phone]"></span> +92 (314) 288-1710
					</li>
					<li>
						<!--outline-email-->
						<span class="icon-[ic--baseline-alternate-email]"></span> contact@octahat.com
					</li>
				</ul>
			</div>
		</div>
		<ul
			class="footer-nav flex flex-wrap justify-center text-sm uppercase leading-[1.6em] text-white list-none p-[0_0_40px_0] m-0"
		>
			<li><a href="/">HOME</a></li>
			<li><a href="/">ABOUT</a></li>
			<li><a href="/">SERVICES</a></li>
			<li><a href="/">PORTFOLIO</a></li>
		</ul>
	</div>
	<div class="text-base border-t-body border-t border-solid p-[35px_0] text-center">
		<div class="container">
			<span class="text-sm">&#9400;</span>OctaHat 2024. All Right reserved
		</div>
	</div>
</footer>

<style>
	.social > a {
		@apply flex items-center justify-center;
	}

	.social > a > span {
		@apply text-4xl;
	}

	.contact > li {
		@apply relative text-base pl-[30px] m-[10px_20px] max-w-[200px];
	}

	.contact > li > span {
		@apply absolute flex text-white left-0 top-1 text-xl;
	}

	.footer-nav > li {
		@apply m-[5px_25px];
	}
</style>
