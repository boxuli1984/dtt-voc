import { useEcharts } from "@/hooks/useEcharts";

const LineChart = () => {
	const data = [
		{ value: 30, spotName: "周一" },
		{ value: 90, spotName: "周二" },
		{ value: 10, spotName: "周三" },
		{ value: 70, spotName: "周四" },
		{ value: 57, spotName: "周五" },
		{ value: 60, spotName: "周六" },
		{ value: 55, spotName: "周日" }
	];
	const option: any = {
		tooltip: {
			trigger: "axis"
			// backgroundColor: "transparent",
			// axisPointer: {
			// 	type: "none"
			// },
			// padding: 0,
			// formatter: (p: any) => {
			// 	let dom = `<div style="width:100%; height: 70px !important; display:flex;flex-direction: column;justify-content: space-between;padding:10px;box-sizing: border-box;
			// color:#fff; background: #6B9DFE;border-radius: 4px;font-size:14px; ">
			//   <div style="display: flex; align-items: center;"> <div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>平台 :  ${p[0].name}</div>
			//   <div style="display: flex;align-items: center;"><div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>数据量 :  ${p[0].value}</div>
			// </div>`;
			// 	return dom;
			// }
		},
		// toolbox: {
		// 	show: true,
		// 	orient: "horizontal"
		// },
		grid: {
			top: "3%",
			left: "5%",
			right: "6%",
			bottom: "5%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				data: data.map((val: any) => {
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
		yAxis: [
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
				type: "line",
				smooth: true,
				data: data.map((val: any) => {
					return {
						value: val.value
					};
				}),
				lineStyle: {
					color: "#3375b9",
					width: 3,
					shadowColor: "rgba(0,0,0,0.1)"
				},
				symbolSize: 6,
				symbol: "circle",
				emphasis: {
					itemStyle: {
						color: "#3375b9"
					}
				}
			}
		]
	};
	const [echartsRef] = useEcharts(option, data);
	return <div ref={echartsRef} className="content-box"></div>;
};

export default LineChart;
