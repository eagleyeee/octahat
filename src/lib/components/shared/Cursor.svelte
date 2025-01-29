<script lang="ts">
	import { Cursor } from 'svelte-swiftcursor';

	let { isDark } = $props();
</script>

<Cursor
	cColor={isDark === true ? '#ffffff60' : '#10101060'}
	cSize={32}
	cShape="square"
	hoverAnimate={true}
/>
<Cursor cColor="#0097b2" cSize={8} cShape="square" />
