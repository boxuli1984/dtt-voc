import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import "./index.less";

/**
 * @description 使用Echarts(只是为了添加图表响应式)
 * @param {Element} data 数据 目前只针对于次Hooks-admin里一些data都是写死在options 所以data为可选 根据项目自行修改即可
 * @param {Object} options 绘制Echarts的参数(必传)
 * @return chart
 * */
const MapEcharts = (props: any) => {
	const { options, onEvents } = props;
	const myChart = useRef<echarts.EChartsType>();
	const echartsRef = useRef<HTMLDivElement>(null);

	const echartsResize = () => {
		echartsRef && myChart?.current?.resize();
	};

	useEffect(() => {
		if (options) {
			if (echartsRef?.current) {
				myChart.current = echarts.init(echartsRef.current as HTMLDivElement);
			}
			myChart?.current?.setOption(options);
		}
	}, [options]);

	useEffect(() => {
		if (echartsRef?.current) {
			myChart.current = echarts.init(echartsRef.current as HTMLDivElement);
		}
		myChart?.current?.setOption(options);
		window.addEventListener("resize", echartsResize, false);

		return () => {
			window.removeEventListener("resize", echartsResize);
			myChart?.current?.dispose();
		};
	}, []);

	useEffect(() => {
		if (onEvents) {
			// 监听事件并调用传入的onEvents方法
			Object.keys(onEvents || {}).forEach(eventName => {
				myChart?.current?.on(eventName, onEvents[eventName]);
			});
		}
	}, [onEvents]);

	return <div ref={echartsRef} className="content-box"></div>;
};

export default MapEcharts;
