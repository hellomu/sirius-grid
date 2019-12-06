<template>
	<div id="app">
		<div style="width: 600px;">
			<p>
				GRID组件，支持自定义label的宽度，字体颜色、位置、背景色，以及内容的字体颜色、位置、背景色，如果都不设置，则为默认样式，同时还支持header/footer两个slot，具体看实例
			</p>
			<si-grid :tempData="tempData">
				<template slot="header">
					<si-grid-item prop="id" label="用户编号"></si-grid-item>
					<si-grid-item prop="date" label="生日"></si-grid-item>
				</template>
				<si-sub-grid>
					<si-grid-item prop="id" label="用户编号"></si-grid-item>
					<si-grid-item prop="date" label="生日"></si-grid-item>
					<si-grid-item prop="name" label="姓名"></si-grid-item>
				</si-sub-grid>
				<si-sub-grid>
					<si-grid-item prop="old" label="年龄"></si-grid-item>
					<si-grid-item prop="phone" label="电话"></si-grid-item>
					<si-grid-item prop="email" label="邮箱"></si-grid-item>
				</si-sub-grid>
				<template slot="footer">
					<si-grid-item prop="address" label="地址"></si-grid-item>
					<si-grid-item prop="address" label="地址"></si-grid-item>
				</template>
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
				email: "789546463@qq.com"
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
