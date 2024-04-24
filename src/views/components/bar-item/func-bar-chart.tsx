import VerticalBarChart from "./vertical-bar-chart";
import "./index.less";

const FuncBarItem = (props: any) => {
	const { barData } = props;

	return (
		<div className="bar-item">
			<div className="func-bar-echarts">{barData?.length > 0 && <VerticalBarChart chartData={barData} />}</div>
		</div>
	);
};

export default FuncBarItem;
