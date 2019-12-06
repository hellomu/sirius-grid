<template>
	<div class="si-sub-grid">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "SiSubGrid",
	props: {
		data: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>
