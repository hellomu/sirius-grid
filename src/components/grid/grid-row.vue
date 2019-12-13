<template>
	<div
		class="si-grid-row"
		ref="gridRow"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "SiGridRow",
	data() {
		return {
			colCount: 0
		};
	},
	provide() {
		return {
			row: this
		};
	},
	mounted() {
		this.colCount = this.$el.childElementCount;
	}
};
</script>

<style lang="scss" scoped>
.si-grid-row {
	display: flex;
	flex-flow: row nowrap;
	> .si-grid-col {
		flex: 1;
	}
	& + & {
		margin-top: -1px;
	}
}
</style>