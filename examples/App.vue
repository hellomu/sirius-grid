<template>
	<div id="app">
		<div style="width: 600px;">
			<p>基础用法(需要保证宽度足够，否则每列不一定对齐)</p>
			<si-grid :tempData="tempData">
				<si-grid-row>
					<si-grid-col
						prop="id"
						label="账号"
					></si-grid-col>
					<si-grid-col
						prop="name"
						label="姓名"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="date"
						label="生日"
					></si-grid-col>
					<si-grid-col
						prop="old"
						label="年龄"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="address"
						label="地址"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="email"
						label="邮箱"
					></si-grid-col>
					<si-grid-col
						prop="id"
						label="账号"
					></si-grid-col>
				</si-grid-row>
			</si-grid>
			<p>GRID组件，支持自定义label的宽度，字体颜色、位置、背景色，以及内容的字体颜色、位置、背景色，如果都不设置，则为默认样式，同时还支持header/footer两个slot，具体看实例</p>
			<si-grid
				:tempData="tempData"
				:labelWidth="100"
				labelBackground="#ddd"
				labelPosition="center"
				labelColor="#fff"
				contentBackground="#ddd"
				contentPosition="center"
				contentColor="#fff"
			>
				<si-grid-row>
					<si-grid-col
						prop="id"
						label="账号"
					></si-grid-col>
					<si-grid-col
						prop="name"
						label="姓名"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="date"
						label="生日"
					></si-grid-col>
					<si-grid-col
						prop="old"
						label="年龄"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="address"
						label="地址"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="email"
						label="邮箱"
					></si-grid-col>
					<si-grid-col
						prop="id"
						label="账号"
					></si-grid-col>
				</si-grid-row>
			</si-grid>
			<p>乱用的结果</p>
			<si-grid :tempData="tempData">
				<si-grid-row>
					<si-grid-col
						prop="id"
						label="账号"
					></si-grid-col>
					<si-grid-col
						prop="name"
						label="姓名"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="date"
						label="生日"
					></si-grid-col>
					<si-grid-col
						prop="date"
						label="生日"
					></si-grid-col>
					<si-grid-col
						prop="address"
						label="地址"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="address"
						label="地址"
					></si-grid-col>
				</si-grid-row>
				<si-grid-row>
					<si-grid-col
						prop="email"
						label="邮箱"
					></si-grid-col>
					<si-grid-col
						prop="id"
						label="账号"
					></si-grid-col>
				</si-grid-row>
			</si-grid>
			<p>grid组件api</p>
			<table>
				<thead>
					<tr>
						<th>属性名</th>
						<th>类型</th>
						<th>取值</th>
						<th>默认值</th>
						<th>注释</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(api, index) in apis"
						:key="index"
					>
						<td>{{api.name}}</td>
						<td>{{api.type}}</td>
						<td>{{api.options}}</td>
						<td>{{api.default}}</td>
						<td>{{api.declare}}</td>
					</tr>
				</tbody>
			</table>
			<p>grid-col组件api</p>
			<table>
				<thead>
					<tr>
						<th>属性名</th>
						<th>类型</th>
						<th>取值</th>
						<th>默认值</th>
						<th>注释</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(api, index) in colApis"
						:key="index"
					>
						<td>{{api.name}}</td>
						<td>{{api.type}}</td>
						<td>{{api.options}}</td>
						<td>{{api.default}}</td>
						<td>{{api.declare}}</td>
					</tr>
				</tbody>
			</table>
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
				address:
					"上海市普陀区金沙江路 100 弄11111111111111111111111111111",
				old: "26",
				phone: "111111111222",
				email: "78954232342343@qq.com"
			},
			apis: [
				{
					name: "tempData",
					type: "Object",
					declare: "grid绑定的数据"
				},
				{
					name: "labelWidth",
					type: "Number",
					declare: "label的宽度"
				},
				{
					name: "labelBackground",
					type: "String",
					declare: "label的背景颜色"
				},
				{
					name: "labelPosition",
					type: "String",
					options: "left/center/right",
					declare: "label的位置"
				},
				{
					name: "labelColor",
					type: "String",
					default: "rgb(238, 238, 238)",
					declare: "label的颜色"
				},
				{
					name: "contentBackground",
					type: "String",
					declare: "content的背景颜色"
				},
				{
					name: "contentPosition",
					type: "String",
					options: "left/center/right",
					declare: "content的颜色"
				},
				{
					name: "contentColor",
					type: "String",
					declare: "content的字体颜色"
				}
			],
			colApis: [
				{
					name: "prop",
					type: "String",
					declare: "绑定数据的属性名"
				},
				{
					name: "label",
					type: "String",
					declare: "label的内容"
				}
			]
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
