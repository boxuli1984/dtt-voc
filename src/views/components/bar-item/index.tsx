import VerticalBarChart from "./vertical-bar-chart";
import "./index.less";

const BarItem = (props: any) => {
	const { barData } = props;

	return (
		<div className="bar-item">
			<div className="module-echarts">{barData?.length > 0 && <VerticalBarChart chartData={barData} />}</div>
		</div>
	);
};

export default BarItem;
