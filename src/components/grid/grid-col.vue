<template>
	<label class="si-grid-col">
		<div class="si-grid-col-title" :style="labelStyle">
			{{ label }}
		</div>
		<div class="si-grid-col-text" :style="textStyle">
			<span>{{ grid.tempData[prop] }}</span>
		</div>
	</label>
</template>

<script>
export default {
	name: "SiGridCol",
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
				computedLabelWidth
			} = this.grid;
			let obj = {
				width: `${computedLabelWidth}px`,
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
				computedLabelWidth
			} = this.grid;
			let obj = {
				textAlign: contentPosition,
				marginLeft: `${computedLabelWidth}px`,
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
<style lang="scss" scoped>
.si-grid-col {
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    .si-grid-col-title {
        float: left;
        border-right: 1px solid #dcdfe6;
        box-sizing: border-box;
        padding: 5px;
    }
    .si-grid-col-text {
        box-sizing: border-box;
        padding: 5px;
    }
    &+& {
        margin-left: -1px;
    }
}
</style>
