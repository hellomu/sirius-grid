// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import siriusGrid from "../src/index";
import "../src/styles/index.scss";

Vue.config.productionTip = false;
Vue.use(siriusGrid);
/* eslint-disable no-new */
new Vue({
	el: "#app",
	components: { App },
	template: "<App/>"
});
