import * as echarts from "echarts";
import MapEcharts from "./useMapEcharts";
import { useState, useEffect, useRef } from "react";
import { geoJson } from "./china";
import * as level1Json from "./region-level1";

echarts.registerMap("china", JSON.stringify(geoJson));
echarts.registerMap("shanghai", JSON.stringify(level1Json.shanghaiGeoJson));
echarts.registerMap("hubei", JSON.stringify(level1Json.hubeiGeoJson));
echarts.registerMap("neimenggu", JSON.stringify(level1Json.neimengguGeoJson));
echarts.registerMap("beijing", JSON.stringify(level1Json.beijingGeoJson));
echarts.registerMap("xizang", JSON.stringify(level1Json.xizangGeoJson));

const ChinaMapChartComp = (props: any) => {
	let [chartOpts, setChartOpts] = useState<any>();
	let [chartEvents, setChartEvents] = useState<any>();

	const eventObj = {
		click: function (params: any) {
			const childName = params?.name || "";
			const childMapName = params?.data?.childName;
			const childSeriesData = params?.data?.seriesData || [];

			if (!childMapName) {
				return false;
			}

			let optTmp = getChartOption();
			const newOptTmp = Object.assign(optTmp, {
				visualMap: {
					min: 10,
					max: 1000
				},
				series: [
					{
						name: `${childName} 声音量`,
						type: "map",
						map: childMapName,
						itemStyle: {
							areaColor: "#fff"
						},
						emphasis: {
							itemStyle: {
								color: "#3375b9"
							}
						},
						data: childSeriesData,
						nameProperty: "name",
						roam: true,
						zoom: 1.2
						// scaleLimit: {
						// 	min: 1,
						// 	max: 10
						// }
					}
				]
			});
			setChartOpts(newOptTmp);
		},
		restore: function () {
			// alert("图表恢复到初始状态！");
		}
	};

	useEffect(() => {
		let optTmp = getChartOption();

		setChartOpts(optTmp);
		setChartEvents(eventObj);
	}, []);

	const getChartOption = () => {
		return {
			tooltip: {
				trigger: "item",
				showDelay: 0,
				transitionDuration: 0.2
			},
			toolbox: {
				feature: {
					restore: {
						show: true,
						title: "还原"
					}
				}
			},
			visualMap: {
				left: "left",
				min: 100,
				max: 10000,
				inRange: {
					color: [
						"#313695",
						"#4575b4",
						"#74add1",
						"#abd9e9",
						"#e0f3f8",
						"#ffffbf",
						"#fee090",
						"#fdae61",
						"#f46d43",
						"#d73027",
						"#a50026"
					]
				},
				text: ["High", "Low"],
				calculable: true
			},
			grid: {
				top: "100",
				left: "3%",
				right: "3%",
				bottom: "3%",
				containLabel: true
			},
			series: [
				{
					name: "声音量",
					type: "map",
					map: "china",
					// smooth: true,
					itemStyle: {
						areaColor: "#fff"
					},
					// label: {
					// 	show: true,
					// 	position: [1, 100],
					// 	offset: [2, 0],
					// 	valueAnimation: true,
					// 	color: "#1565C0",
					// 	fontWeight: "bold"
					// },
					emphasis: {
						itemStyle: {
							color: "#3375b9"
						}
					},
					nameProperty: "name",
					data: [
						{
							name: "内蒙古自治区",
							childLevel: 0,
							childName: "neimenggu",
							value: 1000,
							seriesData: [{ name: "呼和浩特市", childLevel: 1, value: 270 }]
						},
						{
							name: "北京市",
							childLevel: 0,
							childName: "beijing",
							value: 700,
							seriesData: [
								{ name: "海淀区", childLevel: 1, value: 570 },
								{ name: "东城区", childLevel: 1, value: 280 },
								{ name: "西城区", childLevel: 1, value: 50 }
							]
						},
						{
							name: "湖北省",
							childLevel: 0,
							childName: "hubei",
							value: 1130,
							seriesData: [
								{ name: "武汉市", childLevel: 1, value: 80 },
								{ name: "襄阳市", childLevel: 1, value: 150 }
							]
						},
						{
							name: "上海市",
							childLevel: 0,
							childName: "shanghai",
							value: 7000,
							seriesData: [
								{ name: "黄浦区", childLevel: 1, value: 800 },
								{ name: "浦东新区", childLevel: 1, value: 50 }
							]
						},
						{
							name: "西藏自治区",
							childLevel: 0,
							childName: "xizang",
							value: 200,
							seriesData: [{ name: "拉萨市", childLevel: 1, value: 110 }]
						}
					],
					roam: true,
					zoom: 1.2,
					scaleLimit: {
						min: 1,
						max: 10
					}
				}
			]
		};
	};

	return chartOpts && <MapEcharts options={chartOpts} onEvents={chartEvents} />;
};

export default ChinaMapChartComp;
