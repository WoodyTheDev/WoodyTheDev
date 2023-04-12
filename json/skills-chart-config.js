export default {
	emptyLabels: ["", "", "", ""],
	// frontendLabels:
	// 	CURRENT_LANGUAGE === LANGUAGE.DE
	// 		? [
	// 				"Design",
	// 				"Grafiken",
	// 				"HTML, CSS, JS\nLibrarys & Frameworks",
	// 				"Sicherheit & Leistung",
	// 		  ]
	// 		: [
	// 				"Design",
	// 				"Graphics",
	// 				"HTML, CSS, JS\nLibrarys & Frameworks",
	// 				"Security & Performance",
	// 		  ],
	// backendLabels:
	// 	CURRENT_LANGUAGE === LANGUAGE.DE
	// 		? [
	// 				"Design",
	// 				"Grafiken",
	// 				"HTML, CSS, JS\nLibrarys & Frameworks",
	// 				"Sicherheit & Leistung",
	// 		  ]
	// 		: [
	// 				"Design",
	// 				"Graphics",
	// 				"HTML, CSS, JS\nLibrarys & Frameworks",
	// 				"Security & Performance",
	// 		  ],
	frontend: [
		{
			axis: "x",
			data: [25, 50, 75, 100],
			fill: false,
			barPercentage: 2,
			categoryPercentage: 0.8,
			backgroundColor: [
				"rgba(75, 192, 192, 0.2)",
				"rgba(69, 184, 202, 0.2)",
				"rgba(61, 173, 218, 0.2)",
				"rgba(54, 162, 235, 0.2)",
			],
			hoverBackgroundColor: [
				"rgba(75, 192, 192, 0.8)",
				"rgba(69, 184, 202, 0.8)",
				"rgba(61, 173, 218, 0.8)",
				"rgba(54, 162, 235, 0.8)",
			],
			borderColor: [
				"rgb(75, 192, 192)",
				"rgb(69, 184, 202)",
				"rgb(61, 173, 218)",
				"rgb(54, 162, 235)",
			],
			borderWidth: 1,
		},
	],
	backend: [
		{
			axis: "x",
			data: [25, 50, 75, 100],
			fill: false,
			barPercentage: 2,
			categoryPercentage: 0.8,
			backgroundColor: [
				"rgba(54, 162, 235, 0.2)",
				"rgba(61, 173, 218, 0.2)",
				"rgba(69, 184, 202, 0.2)",
				"rgba(75, 192, 192, 0.2)",
			],
			hoverBackgroundColor: [
				"rgba(54, 162, 235, 0.8)",
				"rgba(61, 173, 218, 0.8)",
				"rgba(69, 184, 202, 0.8)",
				"rgba(75, 192, 192, 0.8)",
			],
			borderColor: [
				"rgb(54, 162, 235)",
				"rgb(61, 173, 218)",
				"rgb(69, 184, 202)",
				"rgb(75, 192, 192)",
			],
			borderWidth: 1,
		},
	],
	configOptions: {
		animation: {
			animateScale: true,
		},
		responsive: true,
		maintainAspectRatio: false,
		onHover: function (event, chartElements) {
			if (chartElements.length > 0) {
				activateBulletpoint(chartElements[0].index + 1);
			}
		},
		scales: {
			y: {
				display: false,

				border: {
					display: true,
				},
				grid: {
					display: false,
				},
				ticks: {
					callback: function (value, index, values) {
						return "";
					},
				},
			},
			x: {
				border: {
					display: true,
				},
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 16,
					},
					color: "#d9dbea",
					callback: function (value, index, values) {
						return "";
					},
					padding: -12,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
		},
	},
};
