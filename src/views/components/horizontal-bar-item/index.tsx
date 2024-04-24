import HorizontalBarChart from "./bar-chart";
import "./index.less";

const BarItem = (props: any) => {
	const { barData } = props;

	return (
		<div className="bar-item">
			<div className="module-echarts">{barData?.length > 0 && <HorizontalBarChart chartData={barData} />}</div>
		</div>
	);
};

export default BarItem;
