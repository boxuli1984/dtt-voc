import ChinaMapChartComp from "./china-map-chart";
import "./index.less";

const ChinaMapItem = (props: any) => {
	const { barData } = props;

	return (
		<div className="china-map-item">
			<div className="module-echarts-header">
				<div className="echarts-main-header">全国声音量</div>
			</div>
			<div className="module-echarts">
				{/* {barData?.length > 0 &&  */}
				<ChinaMapChartComp chartData={barData} />
				{/* } */}
			</div>
		</div>
	);
};

export default ChinaMapItem;
