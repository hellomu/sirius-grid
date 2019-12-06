<template>
	<div class="si-grid">
		<div class="si-grid-header">
			<slot name="header"></slot>
		</div>
		<div class="si-grid-body">
			<slot></slot>
		</div>
		<div class="si-grid-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SiGrid",
	provide() {
		return {
			grid: this
		};
	},
	props: {
		tempData: {
			type: Object,
			default() {
				return {};
			}
		},
		labelWidth: {
			type: String || Number,
			default: "auto"
		},
		labelBackground: {
			type: String,
			default: "#eee"
		},
		labelPosition: {
			type: String,
			default: "right",
			validator(val) {
				return !val || ["left", "center", "right"].includes(val);
			}
		},
		labelColor: {
			type: String
		},
		contentBackground: {
			type: String,
			default: "#fff"
		},
		contentPosition: {
			type: String,
			default: "left",
			validator(val) {
				return !val || ["left", "center", "right"].includes(val);
			}
		},
		contentColor: {
			type: String
		}
	},
	data() {
		return {
			computedLabel: []
		};
	},
	methods: {
		setLabelWidth(val) {
			this.computedLabel.push(val);
		},
		registerLabelWidth(val) {
			let index = this.computedLabel.indexOf(val);
			this.computedLabel.splice(index, 1);
		}
	},
	computed: {
		computedLabelWidth() {
			return Math.max.apply(null, this.computedLabel);
		}
	}
};
</script>
