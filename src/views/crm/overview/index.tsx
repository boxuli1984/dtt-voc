import { useState, useEffect } from "react";
import { Tabs, Segmented, DatePicker, Card, Col, Row } from "antd";
import LineItem from "@/views/components/line-item";
import BarGroupSection from "./bar-group-section";
import ExpectGroupSection from "./expect-group-section";
import CardListSection from "./card-list-section";
import "./index.less";

const CrmOverview = () => {
	const { RangePicker } = DatePicker;
	const onChange = (key: any) => {
		console.log(key);
	};

	const tabsList = [
		{ label: "今日", value: 1 },
		{ label: "本周", value: 2 },
		{ label: "近一月", value: 3 },
		{ label: "近三月", value: 4 },
		{ label: "近半年", value: 5 },
		{ label: "近一年", value: 6 }
	];

	const [chartHeader1, setChartHeader1] = useState<any>({});
	const [footerObj1, setFooterObj1] = useState<any>({});

	const [chartHeader2, setChartHeader2] = useState<any>({});
	const [footerObj2, setFooterObj2] = useState<any>({});

	const [chartHeader3, setChartHeader3] = useState<any>({});
	const [footerObj3, setFooterObj3] = useState<any>({});

	useEffect(() => {
		setChartHeader1({
			name: "最满意的声音",
			value: 69
		});
		setFooterObj1({
			momVal: 81,
			yoyVal: 0
		});

		setChartHeader2({
			name: "最不满意的声音",
			value: 72
		});
		setFooterObj2({
			momVal: 81,
			yoyVal: -21
		});

		setChartHeader3({
			name: "期待功能的声音",
			value: 78
		});
		setFooterObj3({
			momVal: 83,
			yoyVal: 34
		});
	}, []);

	return (
		<div className="crmOverview-box">
			<div className="top-module-box">
				<div className="module-title">部门数据</div>
				<div className="module-content">
					<div className="module-item">
						<span className="module-item-name">23年至今满意度</span>
						<span className="module-item-value">90.32%</span>
					</div>
					<div className="module-item">
						<span className="module-item-name">23年至今NPS</span>
						<span className="module-item-value">46.97%</span>
					</div>
				</div>
			</div>
			<div className="top-module-box">
				<div className="module-header">
					<div className="module-title">分时数据</div>
					<div className="bottom-tabs">
						<Segmented
							// size="large"
							options={tabsList}
							onChange={val => {
								onChange(val);
							}}
						/>
						<RangePicker className="date-range" />
					</div>
				</div>
				<Card>
					<Row gutter={10}>
						<Col span={8}>
							<LineItem chartHeader={chartHeader1} footerObj={footerObj1}></LineItem>
						</Col>
						<Col span={8}>
							<LineItem chartHeader={chartHeader2} footerObj={footerObj2}></LineItem>
						</Col>
						<Col span={8}>
							<LineItem chartHeader={chartHeader3} footerObj={footerObj3}></LineItem>
						</Col>
					</Row>
				</Card>

				<div className="tabs-section">
					<Tabs defaultActiveKey="1" onChange={onChange}>
						<Tabs.TabPane tab="满意度调查" key="1">
							<BarGroupSection />
							<CardListSection />
						</Tabs.TabPane>
						<Tabs.TabPane tab="期待功能调查" key="2">
							<ExpectGroupSection />
						</Tabs.TabPane>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default CrmOverview;
