import Grid from "./components/grid";
import SubGrid from "./components/sub-grid";
import GridItem from "./components/grid-item";
import GridRow from "./components/grid-row";
import GridCol from "./components/grid-col";

const components = [Grid, SubGrid, GridItem, GridRow, GridCol];

const install = function(Vue = {}) {
	if (install.installed) {
		return;
	}
	components.forEach(component => {
		Vue.component(component.name, component);
	});
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

const API = {
	version: process.env.VERSION,
	install,
	...components
};

export default API;
