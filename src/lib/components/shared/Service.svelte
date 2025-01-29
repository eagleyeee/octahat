<script lang="ts">
	let { id, title } = $props();
</script>

<span class="mb-10">
	<div class="group relative flex items-center">
		<div class="flex-1">
			<div class="max-w-[510px]">
				<h2 class="m-0 font-kanit text-[28px] font-medium">
					<a href="/" class=""> <span class="text-base">0{id} /</span> {title}</a>
				</h2>
			</div>
		</div>
		<div class="">
			<a
				href="/"
				class="relative block h-[30px] w-[30px] overflow-hidden drop-shadow-xl"
				aria-label="service"
			>
				<i
					class="icon-[solar--arrow-right-outline] -mb-2.5 cursor-none text-[32px] text-primary drop-shadow-xl transition-all delay-150 duration-[0.5s] ease-in-out group-hover:translate-x-[0.20rem] group-hover:-rotate-45 group-hover:text-accent dark:text-white"
				></i>
			</a>
		</div>
	</div>
	<div class="my-6 w-full border-t-2 border-[#101010] content-[''] dark:border-[#d9d9d9]"></div>
</span>
