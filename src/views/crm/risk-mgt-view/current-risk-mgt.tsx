import { useState, useEffect } from "react";
import { Table, Card, Statistic, Button } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, EditOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

import "./index.less";

const CrmCurrentRiskMgt = () => {
	const dataSource1 = [
		{
			key: "1",
			index: 1,
			riskType: "CRM-新增原因",
			riskIndicatorName: "充电盖板开启后会自行关闭",
			messageTotal: 265,
			presetTotal: 165,
			messageIncrement: 111,
			presetIncrement: 56,
			triggerTime: "2024-04-27 09:45:00",
			timeDimension: "今日"
		},
		{
			key: "3",
			index: 3,
			riskType: "CRM-新增原因",
			riskIndicatorName: "车辆无法启动",
			messageTotal: 147,
			presetTotal: 72,
			messageIncrement: 22,
			presetIncrement: 12,
			triggerTime: "2024-04-27 09:45:00",
			timeDimension: "今日"
		},
		{
			key: "5",
			index: 5,
			riskType: "CRM-现存原因",
			riskIndicatorName: "车辆联通无网络/网络信号差",
			messageTotal: 121,
			presetTotal: 19,
			messageIncrement: 12,
			presetIncrement: 9,
			triggerTime: "2024-04-24 17:00:00",
			timeDimension: "今日"
		},
		{
			key: "6",
			index: 6,
			riskType: "CRM-现存原因",
			riskIndicatorName: "滚轮只能调节导航音量",
			messageTotal: 76,
			presetTotal: 7,
			messageIncrement: 7,
			presetIncrement: 2,
			triggerTime: "2024-04-24 17:00:00",
			timeDimension: "本月"
		},
		{
			key: "7",
			index: 7,
			riskType: "CRM-现存原因",
			riskIndicatorName: "产品功能更新不及时",
			messageTotal: 45,
			presetTotal: 6,
			messageIncrement: 12,
			presetIncrement: 1,
			triggerTime: "2024-04-24 17:00:00",
			timeDimension: "本周"
		},
		{
			key: "8",
			index: 8,
			riskType: "CRM-新增原因",
			riskIndicatorName: "悬挂及避震硬",
			messageTotal: 26,
			presetTotal: 3,
			messageIncrement: 0,
			presetIncrement: 0,
			triggerTime: "2024-04-14 21:15:00",
			timeDimension: "今日"
		},
		{
			key: "9",
			index: 9,
			riskType: "CRM-现存原因",
			riskIndicatorName: "车辆空调除雾或除霜失效/效果差",
			messageTotal: 20,
			presetTotal: 3,
			messageIncrement: 7,
			presetIncrement: 0,
			triggerTime: "2024-04-14 14:15:00",
			timeDimension: "本月"
		},
		{
			key: "10",
			index: 10,
			riskType: "CRM-现存原因",
			riskIndicatorName: "整体都不满意",
			messageTotal: 17,
			presetTotal: 1,
			messageIncrement: 0,
			presetIncrement: 0,
			triggerTime: "2024-04-14 21:15:00",
			timeDimension: "本周"
		},
		{
			key: "11",
			index: 1,
			riskType: "CRM-现存原因",
			riskIndicatorName: "倒车雷达有死角",
			messageTotal: 5,
			presetTotal: 1,
			messageIncrement: 0,
			presetIncrement: 0,
			triggerTime: "2024-04-14 21:15:00",
			timeDimension: "本周"
		}
	];
	const columnsTmp = [
		{
			title: "风险类型",
			dataIndex: "riskType",
			key: "riskType",
			width: 150
		},
		{
			title: "风险指标名称",
			dataIndex: "riskIndicatorName",
			key: "riskIndicatorName"
		},
		{
			title: "消息总量",
			dataIndex: "messageTotal",
			key: "messageTotal",
			width: 100,
			align: "center",
			sorter: true,
			render: (text: number) => {
				return <span className="red-col">{text}</span>;
			}
		},
		{
			title: "预设总量",
			dataIndex: "presetTotal",
			key: "presetTotal",
			width: 100,
			align: "center"
		},
		{
			title: "消息增量",
			dataIndex: "messageIncrement",
			key: "messageIncrement",
			width: 100,
			align: "center",
			sorter: true,
			render: (text: number) => {
				if (text) {
					return <span className="red-col">{text}%</span>;
				} else {
					return "-";
				}
			}
		},
		{
			title: "预设增量",
			dataIndex: "presetIncrement",
			key: "presetIncrement",
			width: 100,
			align: "center",
			render: (text: number) => {
				if (text) {
					return `${text}%`;
				} else {
					return "-";
				}
			}
		},
		{
			title: "触发时间",
			dataIndex: "triggerTime",
			key: "triggerTime",
			sorter: true,
			width: 105
		},
		{
			title: "时间维度",
			dataIndex: "timeDimension",
			key: "timeDimension",
			width: 100,
			align: "center"
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
								alert("开发中");
							}}
						>
							编辑
						</Button>
					</div>
				);
			}
		}
	];

	const [listPagination, setListPagination] = useState<any>({
		current: 1,
		pageSize: 10,
		showSizeChanger: true,
		showTotal: () => {
			return `总数：${dataSource1?.length}, `;
		}
	});

	useEffect(() => {
		setListPaginationFunc();
	}, []);

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
	);
};

export default CrmCurrentRiskMgt;
