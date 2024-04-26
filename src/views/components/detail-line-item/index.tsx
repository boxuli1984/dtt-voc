import { Row, Col, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import LineChart from "./line-chart";
import "./index.less";

const DetailLineItem = (props: any) => {
	const { chartHeader, footerObj } = props;

	return (
		<div className="detail-line-item">
			<Row gutter={10}>
				<Col span={6}>
					<div className="module-echarts-header">
						<div className="echarts-main-header">{chartHeader?.name}</div>
						<div className="echarts-sub-header">{chartHeader?.value}</div>
					</div>
					<div className="module-echarts-footer">
						<div className="footer-item">
							<div className="footer-name">环比</div>
							{footerObj?.momVal > 0 && (
								<Statistic value={footerObj?.momVal} valueStyle={{ color: "#cf1322" }} prefix={<ArrowUpOutlined />} suffix="%" />
							)}
							{footerObj?.momVal == 0 && <Statistic value={footerObj?.momVal} valueStyle={{ color: "#333" }} suffix="%" />}
							{footerObj?.momVal < 0 && (
								<Statistic
									value={footerObj?.momVal}
									valueStyle={{ color: "#3f8600" }}
									prefix={<ArrowDownOutlined />}
									suffix="%"
								/>
							)}
						</div>
						<div className="footer-item">
							<div className="footer-name">同比</div>
							{footerObj?.yoyVal > 0 && (
								<Statistic value={footerObj?.yoyVal} valueStyle={{ color: "#cf1322" }} prefix={<ArrowUpOutlined />} suffix="%" />
							)}
							{footerObj?.yoyVal == 0 && <Statistic value={footerObj?.yoyVal} valueStyle={{ color: "#333" }} suffix="%" />}
							{footerObj?.yoyVal < 0 && (
								<Statistic
									value={Math.abs(footerObj?.yoyVal)}
									valueStyle={{ color: "#3f8600" }}
									prefix={<ArrowDownOutlined />}
									suffix="%"
								/>
							)}
						</div>
					</div>
				</Col>
				<Col span={18}>
					<div className="module-echarts">
						<LineChart />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default DetailLineItem;
