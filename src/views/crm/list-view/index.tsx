import { useState, useEffect } from "react";
import moment from "moment";
import { Table, Segmented, DatePicker, Card, Col, Row, Statistic, Space, Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, EditOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import "./index.less";

const CrmListView = (props: any) => {
	const { RangePicker } = DatePicker;
	const onChange = (key: any) => {
		console.log(key);
	};

	const { search: urlSearch } = useLocation();

	const tabsList = [
		{ label: "今日", value: "1" },
		{ label: "本周", value: "2" },
		{ label: "近一月", value: "3" },
		{ label: "近三月", value: "4" },
		{ label: "近半年", value: "5" },
		{ label: "近一年", value: "6" }
	];

	const dataSource1 = [
		{
			key: "1",
			index: 1,
			subjectName: "电池续航短",
			quantity: 17,
			quantityTrend: -4
		},
		{
			key: "2",
			index: 2,
			subjectName: "超充费用太高",
			quantity: 12,
			quantityTrend: 2
		},
		{
			key: "3",
			index: 3,
			subjectName: "场地准入受限制",
			quantity: 12,
			quantityTrend: 2
		},
		{
			key: "4",
			index: 4,
			subjectName: "价格变动大",
			quantity: 11,
			quantityTrend: 3
		},
		{
			key: "5",
			index: 5,
			subjectName: "零部件质量问题多",
			quantity: 9,
			quantityTrend: -10
		},
		{
			key: "6",
			index: 6,
			subjectName: "座椅不舒服",
			quantity: 2,
			quantityTrend: 2
		},
		{
			key: "7",
			index: 7,
			subjectName: "产品功能更新不及时",
			quantity: 1,
			quantityTrend: 1
		},
		{
			key: "8",
			index: 8,
			subjectName: "悬挂及避震硬",
			quantity: 0,
			quantityTrend: -5
		},
		{
			key: "9",
			index: 9,
			subjectName: "雨刮器不够智能",
			quantity: 0,
			quantityTrend: -2
		},
		{
			key: "10",
			index: 10,
			subjectName: "整体都不满意",
			quantity: 0,
			quantityTrend: -1
		},
		{
			key: "1",
			index: 1,
			subjectName: "倒车雷达有死角",
			quantity: 11,
			quantityTrend: 1,
			label1: 10,
			label2: 10,
			label3: 10
		},
		{
			key: "2",
			index: 2,
			subjectName: "后座舒适度不够",
			quantity: 9,
			quantityTrend: 2,
			label1: 20,
			label2: 10,
			label3: 2
		},
		{
			key: "3",
			index: 3,
			subjectName: "内饰过于简陋",
			quantity: 5,
			quantityTrend: 1,
			label1: 30,
			label2: 20,
			label3: 3
		},
		{
			key: "4",
			index: 4,
			subjectName: "价格变动大",
			quantity: 2,
			quantityTrend: 3,
			label1: 40,
			label2: 30,
			label3: 4
		},
		{
			key: "5",
			index: 5,
			subjectName: "高速噪音有点大",
			quantity: 2,
			quantityTrend: 1,
			label1: 50,
			label2: 40,
			label3: 5
		},
		{
			key: "6",
			index: 6,
			subjectName: "前机盖左右两侧",
			quantity: 2,
			quantityTrend: 2,
			label1: 10,
			label2: 60,
			label3: 5
		},
		{
			key: "7",
			index: 7,
			subjectName: "车漆太薄",
			quantity: 1,
			quantityTrend: 1,
			label1: 20,
			label2: 70,
			label3: 6
		},
		{
			key: "8",
			index: 8,
			subjectName: "维修费用太贵",
			quantity: 0,
			quantityTrend: -5,
			label1: 30,
			label2: 80,
			label3: 7
		},
		{
			key: "9",
			index: 9,
			subjectName: "降价太夸张",
			quantity: 0,
			quantityTrend: -2,
			label1: 40,
			label2: 90,
			label3: 8
		},
		{
			key: "10",
			index: 10,
			subjectName: "电脑反应慢",
			quantity: 0,
			quantityTrend: -1,
			label1: 50,
			label2: 90,
			label3: 9
		}
	];
	const columnsTmp = [
		{
			title: "满意度原因",
			dataIndex: "subjectName",
			key: "subjectName"
		},
		{
			title: "数量",
			dataIndex: "quantity",
			key: "quantity",
			width: 80,
			align: "right",
			sorter: true
		},
		{
			title: "数量趋势",
			dataIndex: "quantityTrend",
			key: "quantityTrend",
			width: 100,
			align: "right",
			sorter: true,
			render: (text: number) => {
				if (text > 0) {
					return <Statistic value={text} valueStyle={{ color: "#cf1322" }} prefix={<ArrowUpOutlined />} />;
				} else if (text == 0) {
					return <Statistic value={text} valueStyle={{ color: "#333" }} />;
				} else {
					return <Statistic value={Math.abs(text)} valueStyle={{ color: "#3f8600" }} prefix={<ArrowDownOutlined />} />;
				}
			}
		}
	];
	const columns1: any = [
		...columnsTmp,
		{
			title: "操作",
			dataIndex: "tagOpt",
			key: "tagOpt",
			width: 80,
			align: "center",
			render: (text: number, record: any) => {
				if (viewTypeVal == "top") {
					return (
						<div className="opt-col">
							<Button
								type="link"
								size="small"
								onClick={() => {
									record;
								}}
							>
								查看
							</Button>
						</div>
					);
				} else {
					return (
						<div className="opt-col">
							<Button type="link" size="small">
								编辑
							</Button>
							<Button type="link" size="small">
								查看
							</Button>
						</div>
					);
				}
			}
		}
	];

	const [viewTypeVal, setViewTypeVal] = useState<any>("");
	const [pageHeader, setPageHeader] = useState<any>("");
	const [segmentVal, setSegmentVal] = useState<any>("");
	const [dateRangeVal, setDateRangeVal] = useState<any>("");
	const [listPagination, setListPagination] = useState<any>({
		current: 1,
		pageSize: 10
	});

	useEffect(() => {
		setPageParams();

		setListPaginationFunc();
	}, []);

	function setPageParams() {
		// 获取当前URL中的查询参数
		const params = new URLSearchParams(urlSearch);
		// 通过get方法获取特定参数的值
		const viewTypeValTmp = params.get("viewType");
		setViewTypeVal(viewTypeValTmp);
		if (viewTypeValTmp == "top") {
			setPageHeader("Top原因");
		} else {
			setPageHeader("新增原因");
		}

		const timeOptVal = params.get("timeOpt");
		setSegmentVal(timeOptVal);

		const dateRangeTmp = params.get("dateRange");
		if (dateRangeTmp) {
			const dataRangeArr = dateRangeTmp.split(",");
			const momentDateRangeArr = [moment(dataRangeArr[0]), moment(dataRangeArr[1])];
			setDateRangeVal(momentDateRangeArr);
		}
	}

	function setListPaginationFunc() {
		const paginationTmp = Object.assign({}, listPagination, {
			total: dataSource1?.length
		});
		setListPagination(paginationTmp);
	}

	return (
		<div className="crm-list-view-box-box">
			<div className="top-module-box">
				<div className="module-header">
					<div className="module-title">{pageHeader}</div>
					<div className="bottom-tabs">
						<Segmented
							// size="large"
							options={tabsList}
							onChange={val => {
								onChange(val);
							}}
							value={segmentVal}
							defaultValue="1"
						/>
						<RangePicker className="date-range" size="large" value={dateRangeVal} />
					</div>
				</div>
				<Card className="card-section-2">
					<div className="table-content">
						<Table dataSource={dataSource1} columns={columns1} size="small" pagination={listPagination} />
					</div>
				</Card>
			</div>
		</div>
	);
};

export default CrmListView;
