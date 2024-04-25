import * as echarts from "echarts";
import { useEcharts } from "@/hooks/useEcharts";
import { useState, useEffect } from "react";

const VerticalBarChart = (props: any) => {
	const { chartData } = props;
	const [barData, setBarData] = useState([]);

	useEffect(() => {
		setBarData(chartData);
	}, [chartData]);

	const getChartOption = () => {
		return {
			tooltip: {
				trigger: "axis"
			},
			grid: {
				top: "3%",
				left: "5%",
				right: "8%",
				bottom: "3%",
				containLabel: true
			},
			yAxis: [
				{
					type: "category",
					data: barData.map((val: any) => {
						return {
							value: val.spotName
						};
					}),
					axisTick: {
						show: false
					},
					axisLabel: {
						// interval: time > 4 ? 27 : 0,
						// margin: 20,
						interval: 0,
						color: "#6b6d71",
						fontSize: 14,
						formatter: function (name: string) {
							return name.length > 8 ? name.slice(0, 8) + "..." : name;
						}
					},
					axisLine: {
						lineStyle: {
							color: "#6b6d71",
							width: 2
						}
					}
				}
			],
			xAxis: [
				{
					min: 0,
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false,
						lineStyle: {
							type: "dashed",
							color: "#edeff5",
							width: 2
						}
					},
					axisLabel: {
						show: false,
						color: "#a1a1a1",
						fontSize: 16,
						fontWeight: 400,
						formatter: function (value: number) {
							if (value === 0) {
								return value;
							} else if (value >= 10000) {
								return value / 10000 + "w";
							}
							return value;
						}
					}
				}
			],
			series: [
				{
					// name: "Direct",
					type: "bar",
					smooth: true,
					data: barData.map((val: any) => {
						return {
							value: val.value
						};
					}),
					itemStyle: {
						// color: "#1565C0",
						color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
							{ offset: 0, color: "#1565C0" },
							{ offset: 1, color: "#1E88E5" }
						]),
						borderRadius: [0, 20, 20, 0]
					},
					label: {
						show: true,
						position: "right",
						valueAnimation: true,
						color: "#1565C0",
						fontWeight: "bold"
					},
					emphasis: {
						itemStyle: {
							color: "#3375b9"
						}
					},
					barMinHeight: 3,
					barMaxWidth: 30
				}
			]
		};
	};

	let optTmp = getChartOption();

	if (barData?.length > 10) {
		optTmp = Object.assign({}, optTmp, {
			dataZoom: [
				{
					show: true,
					yAxisIndex: 0,
					filterMode: "empty",
					width: 7,
					showDataShadow: false,
					start: 55,
					end: 100,
					fillerColor: "#1565C0"
				}
			]
		});
	}
	const [echartsRef] = useEcharts(optTmp, barData);

	return <div ref={echartsRef} className="content-box"></div>;
};

export default VerticalBarChart;
