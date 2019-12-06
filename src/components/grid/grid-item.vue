<template>
	<label class="si-grid-item">
		<div class="si-grid-item-title" :style="labelStyle">
			<span>{{ label }}</span>
		</div>
		<div class="si-grid-item-text" :style="textStyle">
			<span>{{ grid.tempData[prop] }}</span>
		</div>
	</label>
</template>

<script>
export default {
	name: "SiGridItem",
	inject: ["grid"],
	props: {
		prop: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		}
	},
	computed: {
		labelStyle() {
			let {
				labelBackground,
				labelPosition,
				labelColor,
				labelWidth,
				computedLabelWidth
			} = this.grid;
			let obj = {
				width: `${
					labelWidth === "auto" ? computedLabelWidth : labelWidth
				}px`,
				background: labelBackground,
				textAlign: labelPosition,
				color: labelColor
			};
			return obj;
		},
		textStyle() {
			let {
				contentBackground,
				contentPosition,
				contentColor,
				labelWidth,
				computedLabelWidth
			} = this.grid;
			let obj = {
				textAlign: contentPosition,
				marginLeft: `${
					labelWidth === "auto" ? computedLabelWidth : labelWidth
				}px`,
				background: contentBackground,
				color: contentColor
			};
			return obj;
		}
	},
	methods: {
		getLabelWidth() {
			let width = window.getComputedStyle(this.$el.firstElementChild)
				.width;
			return Math.ceil(parseFloat(width));
		},
		updateLabelWidth(action = "update") {
			if (action === "update") {
				this.grid.setLabelWidth(this.getLabelWidth());
			} else if (action === "remove") {
				this.grid.registerLabelWidth(this.getLabelWidth());
			}
		}
	},
	mounted() {
		this.updateLabelWidth("update");
	},
	beforeDestroy() {
		this.updateLabelWidth("remove");
	}
};
</script>
