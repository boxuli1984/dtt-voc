import { useState, useEffect } from "react";
import { Tabs, Segmented, DatePicker, Card, Col, Row } from "antd";
import LineItem from "@/views/components/line-item";
import BarGroupSection from "./bar-group-section";
import ExpectGroupSection from "./expect-group-section";
import CardListSection from "./card-list-section";
import WorkflowListSection from "../workflow-list-section";
import "./index.less";

const CrmOverview = () => {
	const { RangePicker } = DatePicker;

	const tabsList = [
		{ label: "今日", value: "1" },
		{ label: "本周", value: "2" },
		{ label: "近一月", value: "3" },
		{ label: "近三月", value: "4" },
		{ label: "近半年", value: "5" },
		{ label: "近一年", value: "6" }
	];
	const [timeOpt, setTimeOpt] = useState<any>("1");
	const onChangeTimeOpt = (key: any) => {
		setTimeOpt(key);
	};
	const [dateRangeVal, setDateRangeVal] = useState<any>("");
	const [dateRangeArr, setDateRangeArr] = useState<any>([]);
	const onChangeRangePickerEvent = (dates: any, dateStrings: any) => {
		const dateRangeStr = dateStrings.join(",");
		setDateRangeVal(dateRangeStr);

		setDateRangeArr(dates);
		setTimeOpt("");
	};

	const [chartHeader1, setChartHeader1] = useState<any>({});
	const [footerObj1, setFooterObj1] = useState<any>({});
	const [chartData1, setChartData1] = useState<any>([]);

	const [chartHeader2, setChartHeader2] = useState<any>({});
	const [footerObj2, setFooterObj2] = useState<any>({});
	const [chartData2, setChartData2] = useState<any>([]);

	const [chartHeader3, setChartHeader3] = useState<any>({});
	const [footerObj3, setFooterObj3] = useState<any>({});
	const [chartData3, setChartData3] = useState<any>([]);

	useEffect(() => {
		setChartHeader1({
			name: "最满意的声音",
			value: 69
		});
		setFooterObj1({
			momVal: 81,
			yoyVal: 0
		});
		setChartData1([
			{ value: 30, spotName: "周一" },
			{ value: 90, spotName: "周二" },
			{ value: 10, spotName: "周三" },
			{ value: 70, spotName: "周四" },
			{ value: 57, spotName: "周五" },
			{ value: 60, spotName: "周六" },
			{ value: 55, spotName: "周日" }
		]);

		setChartHeader2({
			name: "最不满意的声音",
			value: 72
		});
		setFooterObj2({
			momVal: 81,
			yoyVal: -21
		});
		setChartData2([
			{ value: 20, spotName: "周一" },
			{ value: 50, spotName: "周二" },
			{ value: 20, spotName: "周三" },
			{ value: 40, spotName: "周四" },
			{ value: 37, spotName: "周五" },
			{ value: 40, spotName: "周六" },
			{ value: 75, spotName: "周日" }
		]);

		setChartHeader3({
			name: "期待功能的声音",
			value: 78
		});
		setFooterObj3({
			momVal: 83,
			yoyVal: 34
		});
		setChartData3([
			{ value: 10, spotName: "周一" },
			{ value: 30, spotName: "周二" },
			{ value: 10, spotName: "周三" },
			{ value: 20, spotName: "周四" },
			{ value: 20, spotName: "周五" },
			{ value: 10, spotName: "周六" },
			{ value: 15, spotName: "周日" }
		]);
	}, []);

	function onClickRiskMgtEvent() {
		const listPath = "/crm/overview/risk";

		const originPath = `${window.location.origin}/#`;
		const navPath = `${listPath}`;
		// navigate(navPath);

		const openUrl = originPath + navPath;
		window.open(openUrl, "_blank");
	}
	return (
		<div className="crm-overview-section">
			<div className="top-section-header">
				<div className="top-section-header-left">
					<div className="top-section-header-user">您好，Xueying Qian</div>
					<div className="top-section-header-role">DTT Team | Product Manager</div>
				</div>
				<div className="top-section-header-right">
					<div className="top-section-header-right-item" onClick={() => onClickRiskMgtEvent()}>
						<div className="top-section-header-risk">风险预警</div>
						<div className="top-section-header-riskval">11</div>
					</div>
				</div>
			</div>
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
					<div className="module-tabs">
						<Segmented
							// size="large"
							options={tabsList}
							onChange={val => {
								onChangeTimeOpt(val);
								setDateRangeArr([]);
							}}
							value={timeOpt}
						/>
						<RangePicker
							className="date-range"
							size="large"
							onChange={(dates, dateStrings) => {
								onChangeRangePickerEvent(dates, dateStrings);
							}}
							value={dateRangeArr}
						/>
					</div>
				</div>
				<Card>
					<Row gutter={10}>
						<Col span={8}>
							{chartData1 && <LineItem chartHeader={chartHeader1} footerObj={footerObj1} chartData={chartData1}></LineItem>}
						</Col>
						<Col span={8}>
							{chartData2 && <LineItem chartHeader={chartHeader2} footerObj={footerObj2} chartData={chartData2}></LineItem>}
						</Col>
						<Col span={8}>
							{chartData3 && <LineItem chartHeader={chartHeader3} footerObj={footerObj3} chartData={chartData3}></LineItem>}
						</Col>
					</Row>
				</Card>

				<div className="tabs-section">
					<Tabs defaultActiveKey="1">
						<Tabs.TabPane tab="满意度调查" key="1">
							<BarGroupSection />
							<CardListSection timeOpt={timeOpt} dateRange={dateRangeVal} />
						</Tabs.TabPane>
						<Tabs.TabPane tab="期待功能调查" key="2">
							<ExpectGroupSection />
						</Tabs.TabPane>
					</Tabs>
				</div>

				<WorkflowListSection />
			</div>
		</div>
	);
};

export default CrmOverview;
