<template>
	<div>
		<chart-analytics
			:chartType="chartType"
			:chartData="chartData"
			:chartOptions="chartOptions"
			:id="id"
			:height="height"
		></chart-analytics>
	</div>
</template>


<script>
import Chart from "./Chart.vue";
export default {
	props: {
		data: Object,
		label: String,
		labels: Object,
		type: String,
		id: String,
		height: String,
	},
	components: {
		"chart-analytics": Chart,
	},
	data() {
		return {
			chartType: this.type,
			chartData: {
				labels: this.labels,
				datasets: [
					{
						label: this.label,
						data: this.data,
						backgroundColor: "rgba(255, 99, 132, 0.2)",
						borderColor: "rgba(255, 99, 132, 1)",
						borderWidth: 1,
					},
				],
			},
			chartOptions: {
				scales: {
					yAxes: [
						{
							ticks: {
								precision: 0,
								beginAtZero: true,
								callback: function (value) {
									if (value === 0) return value;
									return value + "k";
								},
							},
						},
					],
				},
			},
		};
	},
};
</script>


