import { useState, useEffect } from "react";
import { Table, Segmented, Card, Statistic, Button } from "antd";

import "./index.less";

const CrmWorkflowListSection = () => {
	const tabsList = [
		{ label: "全部", value: "1" },
		{ label: "待分配", value: "2" },
		{ label: "进行中", value: "3" },
		{ label: "已完成", value: "4" }
	];

	const dataSource1 = [
		{
			key: "1",
			index: 1,
			itemName: "软件更新",
			itemType: "问题",
			processPlan: "1.检查车辆手册，2.查看制造商网站，3.下载软件更新",
			processDate: "2024-04-12",
			processStatus: "0",
			respPerson: "yxqian@dtt.com",
			comment: "查看软件更新方法",
			quantity: 56,
			quantityTrend: 20
		},
		{
			key: "2",
			index: 2,
			itemName: "超充费用太高",
			itemType: "问题",
			processPlan: "1.使用优惠券或折扣码，2.选择低峰时段充电，3.提前规划充电，4.考虑安装家用充电设备",
			processDate: "2024-04-12",
			processStatus: "1",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 12,
			quantityTrend: 2
		},
		{
			key: "3",
			index: 3,
			itemName: "车辆座椅位置切换异常",
			itemType: "问题",
			processPlan:
				"1.检查电源和连接，2.检查座椅开关和按钮，3.检查保险丝，4.重置座椅控制模块，5.检查座椅轨道和机械部件，6.扫描车辆电子系统故障码",
			processDate: "2024-04-12",
			processStatus: "0",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 12,
			quantityTrend: 2
		},
		{
			key: "4",
			index: 4,
			itemName: "屏慕自上次充电里程不更新",
			itemType: "问题",
			processPlan: "1.系统故障，2.网络连接问题，3.软件问题，4.数据同步延迟",
			processDate: "2024-04-08",
			processStatus: "1",
			respPerson: "yxqian@dtt.com",
			comment: "无",
			quantity: 11,
			quantityTrend: 3
		},
		{
			key: "5",
			index: 5,
			itemName: "车辆提示安全约束系统故障",
			itemType: "问题",
			processPlan: "1.停车检查，2.检查安全带连接，3.检查安全约束系统相关组件，4.扫描车辆电子系统故障码，5.寻求专业帮助",
			processDate: "2024-04-08",
			processStatus: "1",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 9,
			quantityTrend: -10
		},
		{
			key: "6",
			index: 6,
			itemName: "雨雪天气车辆喇叭声音变小",
			itemType: "问题",
			processPlan: "1.水或湿气影响，2.检查喇叭，3.电子系统故障",
			processDate: "2024-04-08",
			processStatus: "1",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 2,
			quantityTrend: 2
		},
		{
			key: "7",
			index: 7,
			itemName: "车辆QQ音乐搔放提示加载错",
			itemType: "问题",
			processPlan: "1.软件问题，2.车载媒体系统问题，3.网络连接问题，4.服务端问题",
			processDate: "2024-04-08",
			processStatus: "1",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 1,
			quantityTrend: 1
		},
		{
			key: "8",
			index: 8,
			itemName: "驾驶视觉画面暂时降级",
			itemType: "问题",
			processPlan: "1.传感器故障，2.环境条件不佳，3.软件更新或校准，4.电力供应问题，5.检查车辆状态",
			processDate: "2024-03-08",
			processStatus: "2",
			respPerson: "yxqian@dtt.com",
			comment: "驾驶辅助系统或者安全系统出现了一些问题",
			quantity: 0,
			quantityTrend: -5
		},
		{
			key: "9",
			index: 9,
			itemName: "雨刮器不够智能",
			itemType: "问题",
			processPlan: "1.感应式雨刮器，2.自动启停功能，3.多种模式选择，4.智能控制面板",
			processDate: "2024-03-28",
			processStatus: "2",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 0,
			quantityTrend: -2
		},
		{
			key: "10",
			index: 10,
			itemName: "充电盖板开启后会自行关闭",
			itemType: "问题",
			processPlan: "1.电子系统故障，2.机械故障，3.外部干扰，4.联系车辆制造商或者经销商的客户服务部门",
			processDate: "2024-03-28",
			processStatus: "2",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 0,
			quantityTrend: -1
		},
		{
			key: "11",
			index: 1,
			itemName: "倒车雷达有死角",
			itemType: "问题",
			processPlan: "1.障碍物遮挡，2.传感器位置、传感器角度，3.谨慎驾驶",
			processDate: "2024-03-28",
			processStatus: "2",
			respPerson: "yxqian@dtt.com",
			comment: "",
			quantity: 11,
			quantityTrend: 1,
			label1: 10,
			label2: 10,
			label3: 10
		}
	];
	const columnsTmp = [
		{
			title: "事项名称",
			dataIndex: "itemName",
			key: "itemName",
			ellipsis: true,
			width: 200
		},
		{
			title: "类型",
			dataIndex: "itemType",
			key: "itemType",
			width: 50
		},
		{
			title: "处理方案",
			dataIndex: "processPlan",
			key: "processPlan",
			ellipsis: true
		},
		{
			title: "处理时间",
			dataIndex: "processDate",
			key: "processDate",
			width: 120
		},
		{
			title: "状态",
			dataIndex: "processStatus",
			key: "processStatus",
			width: 80,
			render: (text: any) => {
				if (text == "0") {
					return <span>待分配</span>;
				} else if (text == "1") {
					return <span>进行中</span>;
				} else {
					return <span>已完成</span>;
				}
			}
		},
		{
			title: "责任人",
			dataIndex: "respPerson",
			key: "respPerson",
			width: 120
			// align: "right"
		},
		{
			title: "备注",
			dataIndex: "comment",
			key: "comment",
			width: 100,
			ellipsis: true
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
				return (
					<div className="opt-col">
						<Button
							type="link"
							size="small"
							onClick={() => {
								// onClickRowDataEvent(record);
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

	const [pageHeader, setPageHeader] = useState<any>("");
	const [workflowType, setWorkflowType] = useState<any>("1");
	const onChangeWorkflowType = (key: any) => {
		setWorkflowType(key);
	};

	const [listPagination, setListPagination] = useState<any>({
		current: 1,
		pageSize: 10,
		showSizeChanger: true,
		showTotal: () => {
			return `总数：${dataSource1?.length}, `;
		}
	});

	useEffect(() => {
		setPageParams();

		setListPaginationFunc();
	}, []);

	function setPageParams() {
		// 通过get方法获取特定参数的值
		setPageHeader("跟踪事项列表");
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

	function onClickRowDataEvent(rData: any) {
		const listPath = "/crm/overview/detailview";

		const originPath = `${window.location.origin}/#`;
		const navPath = `${listPath}?itemName=${rData?.itemName}&quantity=${rData?.quantity}`;
		// navigate(navPath);

		const openUrl = originPath + navPath;
		window.open(openUrl, "_blank");
	}
	return (
		<div className="crm-workflow-list-section">
			<div className="top-module-box">
				<div className="module-header">
					<div className="module-title">{pageHeader}</div>
					<div className="module-tabs">
						<Segmented
							// size="large"
							options={tabsList}
							onChange={val => {
								onChangeWorkflowType(val);
							}}
							value={workflowType}
							defaultValue="1"
							block
						/>
					</div>
					<div className="module-tabs-right">
						<Button
							type="primary"
							onClick={() => {
								alert("开发中");
							}}
						>
							创建事项
						</Button>
						<div
							onClick={() => {
								alert("开发中");
							}}
							className="btn-view-all"
						>
							查看全部
						</div>
					</div>
				</div>
			</div>
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
	);
};

export default CrmWorkflowListSection;
