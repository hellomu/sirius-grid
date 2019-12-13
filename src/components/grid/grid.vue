<template>
	<div class="si-grid">
		<slot></slot>
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
			type: Number
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
			return this.labelWidth
				? this.labelWidth
				: Math.max.apply(null, this.computedLabel);
		}
	}
};
</script>
