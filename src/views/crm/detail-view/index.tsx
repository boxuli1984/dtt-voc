import { useState, useEffect } from "react";
import moment from "moment";
import { Table, Segmented, DatePicker, Card, Button, Row, Col } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import DetailLineItem from "@/views/components/detail-line-item";
import "./index.less";

const CrmDetailView = () => {
	const { RangePicker } = DatePicker;
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
			source: "CRM",
			sourceContent: "先生，13681864095 来电反馈取消软件重新，告知客户无法取消，当前已经更新至60%，建议客户耐心等待",
			releaseTime: "2024-04-20 06:45:08",
			caseNo: "CO009FDE87"
		},
		{
			key: "2",
			index: 2,
			source: "CRM",
			sourceContent: "杨先生13450470589 客户来电咨询车辅软件更新，后台查看无异学，告知客户软件更新注意事项，客户认可。",
			releaseTime: "2024-04-17 16:45:08",
			caseNo: "CO009FDB72"
		},
		{
			key: "3",
			index: 3,
			source: "CRM",
			sourceContent: "先生 13276243944 咨询车辆软件更新，连接手机热点没有更新，坐席查看系统已经最新版本，建议客户重启大屏幕观察",
			releaseTime: "2024-04-16 06:25:08",
			caseNo: "COO09FDB3C"
		},
		{
			key: "4",
			index: 4,
			source: "CRM",
			sourceContent: "王先生13831527287 咨询软件更新 后台查看staging 建议客户耐心等待 讲解断点续传功能 客户知悉",
			releaseTime: "2024-04-16 06:05:08",
			caseNo: "CO009FDA8B"
		},
		{
			key: "5",
			index: 5,
			source: "CRM",
			sourceContent:
				"先生 13357919990 君户来电表示车辆软件更新下载已完成，导航相关更新查看不到进度情况，告知客户目前唐于数据优化相关",
			releaseTime: "2024-04-16 03:45:08",
			caseNo: "CO009FDAIC"
		},
		{
			key: "6",
			index: 6,
			source: "CRM",
			sourceContent: "15385518555 高先生 客户来电咨询自己的软件已经更新完成，为什么APP运提示自己更新后台查看是地国包的更新",
			releaseTime: "2024-04-16 02:45:18",
			caseNo: "CO009FDA12"
		},
		{
			key: "7",
			index: 7,
			source: "CRM",
			sourceContent: "先生：13921202338 软件更新咨询，feature/2023.44.32.1-11-240gdodof1， 此版本主要是软件更新",
			releaseTime: "2024-04-15 19:45:08",
			caseNo: "CO009FD8B1"
		},
		{
			key: "8",
			index: 8,
			source: "CRM",
			sourceContent:
				"刘先生 15659709507 手机ApP提示软件更新 车机,链援网络后无下载提示 查看正在下载2024.8'也图安装包 建议客户等待更新",
			releaseTime: "2024-04-15 16:35:08",
			caseNo: "CO009FD7CC"
		},
		{
			key: "9",
			index: 9,
			source: "CRM",
			sourceContent: "chat-企微：软件更新 已告知目前是需要连接WiFi下载的阶段",
			releaseTime: "2024-04-15 06:15:08",
			caseNo: "CO009FD538"
		},
		{
			key: "10",
			index: 10,
			source: "CRM",
			sourceContent: "般女士13817547857 客户来电咨询车辆软件更新没有推送，后台查看没有待下载软件更新，探作刷新，建议先下载地图包",
			releaseTime: "2024-04-15 03:45:28",
			caseNo: "CO009FD134"
		},
		{
			key: "11",
			index: 11,
			source: "CRM",
			sourceContent: "链援网络后无下载提示 查看正在下载 也图安装包 建议客户等待更新",
			releaseTime: "2024-04-15 01:25:01",
			caseNo: "CO008FD131",
			label1: 10,
			label2: 10,
			label3: 10
		},
		{
			key: "21",
			index: 21,
			source: "CRM",
			sourceContent: "导航相关更新查看不到进度情况，告知客户目前唐于数据优化相关",
			releaseTime: "2024-04-15 01:05:02",
			caseNo: "CO008FD101",
			label1: 20,
			label2: 10,
			label3: 2
		},
		{
			key: "31",
			index: 31,
			source: "CRM",
			sourceContent: "车机,链援网络后无下载提示 查看正在下载2024.8'也图安装包 建议客户等待更新",
			releaseTime: "2024-04-14 16:45:08",
			caseNo: "CO007FD107",
			label1: 30,
			label2: 20,
			label3: 3
		},
		{
			key: "41",
			index: 41,
			source: "CRM",
			sourceContent: "君户来电表示车辆软件更新下载已完成，倒车雷达",
			releaseTime: "2024-04-14 07:45:08",
			caseNo: "CO007FD031",
			label1: 40,
			label2: 30,
			label3: 4
		},
		{
			key: "51",
			index: 51,
			source: "CRM",
			sourceContent: "客户来电咨询车辆软件更新没有推送，后台查看没有待下载软件更新，探作刷新，建议先下载地图包",
			releaseTime: "2024-04-15 06:45:08",
			caseNo: "CO007FD003",
			label1: 50,
			label2: 40,
			label3: 5
		}
	];
	const columnsTmp = [
		{
			title: "满意度原因",
			dataIndex: "sourceContent",
			key: "sourceContent"
		},
		{
			title: "发布时间",
			dataIndex: "releaseTime",
			key: "releaseTime",
			width: 120
		},
		{
			title: "案件编号",
			dataIndex: "caseNo",
			key: "caseNo",
			width: 100
			// sorter: true,
		}
	];
	const columns1: any = [
		{
			title: "来源",
			dataIndex: "source",
			key: "source",
			width: 100
		},
		...columnsTmp,
		{
			title: "操作",
			dataIndex: "tagOpt",
			key: "tagOpt",
			width: 80,
			align: "center",
			render: (text: number, record: any) => {
				return (
					<div className="opt-col">
						<Button
							type="link"
							size="small"
							onClick={() => {
								alert("开发中");
							}}
						>
							查看
						</Button>
					</div>
				);
			}
		}
	];

	const [subjectNameVal, setSubjectNameVal] = useState<any>("");
	const [pageHeader, setPageHeader] = useState<any>("");
	const [timeOpt, setTimeOpt] = useState<any>("");
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

	const [listPagination, setListPagination] = useState<any>({
		current: 1,
		pageSize: 10,
		showSizeChanger: true,
		showTotal: () => {
			return `总数：${dataSource1?.length}, `;
		}
	});

	const [chartHeader1, setChartHeader1] = useState<any>({});
	const [footerObj1, setFooterObj1] = useState<any>({});

	useEffect(() => {
		setPageParams();

		setListPaginationFunc();

		setChartHeader1({
			name: "声音量",
			value: 943
		});
		setFooterObj1({
			momVal: 81,
			yoyVal: 11
		});
	}, []);

	function setPageParams() {
		// 获取当前URL中的查询参数
		const params = new URLSearchParams(urlSearch);
		// 通过get方法获取特定参数的值
		const subjectNameValTmp = params.get("subjectName");
		setSubjectNameVal(subjectNameValTmp);

		setPageHeader("满意度详情");

		const timeOptVal = params.get("timeOpt");
		setTimeOpt(timeOptVal);

		const dateRangeTmp = params.get("dateRange");
		if (dateRangeTmp) {
			setDateRangeVal(dateRangeTmp);

			const dataRangeArr = dateRangeTmp.split(",");
			const momentDateRangeArr = [moment(dataRangeArr[0]), moment(dataRangeArr[1])];
			setDateRangeArr(momentDateRangeArr);
		}
	}

	function setListPaginationFunc() {
		const paginationTmp = Object.assign({}, listPagination, {
			total: dataSource1?.length
		});
		setListPagination(paginationTmp);
	}
	function handleTableChange(pagination: any) {
		const paginationTmp = Object.assign({}, listPagination, pagination);
		setListPagination(paginationTmp);
	}

	return (
		<div className="crm-detail-view-box">
			<div className="top-module-box">
				<div className="module-header">
					<div className="module-title">{pageHeader}</div>
					<div className="bottom-tabs">
						<Segmented
							// size="large"
							options={tabsList}
							onChange={val => {
								onChangeTimeOpt(val);
								setDateRangeArr([]);
							}}
							value={timeOpt}
							defaultValue="1"
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

				<div className="header-section">
					<div className="card-title">{subjectNameVal}</div>
				</div>

				<Card className="card-section-1">
					<DetailLineItem chartHeader={chartHeader1} footerObj={footerObj1} />
				</Card>

				<Card className="card-section-2">
					<div className="table-content">
						<Table
							dataSource={dataSource1}
							columns={columns1}
							size="small"
							pagination={listPagination}
							onChange={handleTableChange}
						/>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default CrmDetailView;
