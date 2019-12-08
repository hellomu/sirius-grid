<template>
	<div id="app">
		<div style="width: 900px;">
			<p>
				GRID组件，支持自定义label的宽度，字体颜色、位置、背景色，以及内容的字体颜色、位置、背景色，如果都不设置，则为默认样式，同时还支持header/footer两个slot，具体看实例
			</p>
			<si-grid :tempData="tempData" :labelWidth="100" labelBackground="#ddd" labelPosition="center" labelColor="#fff" contentBackground="#ddd" contentPosition="center" contentColor="#fff">
				<si-grid-row>
					<si-grid-col prop="id" label="账号"></si-grid-col>
					<si-grid-col prop="name" label="姓名"></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col prop="date" label="生日"></si-grid-col>
					<si-grid-col prop="old" label="年龄"></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col prop="address" label="地址"></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col prop="email" label="邮箱"></si-grid-col>
					<si-grid-col prop="id" label="账号"></si-grid-col>
				</si-grid-row>
			</si-grid>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			tempData: {
				id: "1",
				date: "2016-05-02",
				name: "王小虎1",
				address: "上海市普陀区金沙江路 100 弄",
				old: "26",
				phone: "111111111222",
				email: "78954232342343@qq.com"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
#app {
	background: #fafafa;
	.menu {
		a {
			color: #3e76f6;
		}
	}
}
</style>
