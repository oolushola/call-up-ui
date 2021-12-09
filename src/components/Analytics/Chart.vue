<template>
	<div class="canvasHeight">
		<canvas :height="height" :id="id"></canvas>
	</div>
</template>


<script>
import Chart from "chart.js";
export default {
	props: {
		chartType: String,
		chartData: Object,
		chartOptions: Object,
		id: String,
		height: String,
	},
	methods: {
		chartconstructor(chartType, chartData, chartOptions) {
			const chartElement = document.getElementById(this.id);
			const chart = new Chart(chartElement, {
				type: chartType,
				data: chartData,
				options: chartOptions,
			});
			return chart.update();
		},
	},
	mounted() {
		let { chartType, chartData, chartOptions } = this;
		this.chartconstructor(chartType, chartData, chartOptions);
	},
};
</script>

<style scoped>
canvas {
	height: 400px;
}
</style>