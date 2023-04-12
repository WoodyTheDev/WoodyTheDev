import dataJson from "../json/skills-chart-config.js";

(async function () {
	const dataFrontend = {
		labels: dataJson.emptyLabels,
		datasets: dataJson.frontend,
	};
	const dataBackend = {
		labels: dataJson.emptyLabels,
		datasets: dataJson.backend,
	};
	const options = dataJson.configOptions;
	const configFrontend = {
		type: "bar",
		data: dataFrontend,
		options,
	};
	const configBackend = {
		type: "bar",
		data: dataBackend,
		options,
	};
	window.frontendChart = new Chart(document.getElementById("frontend-chart"), configFrontend);
	window.backendChart = new Chart(document.getElementById("backend-chart"), configBackend);
	activateBar(window.frontendChart, 1);
	activateBar(window.backendChart, 1);
})();
