import { useState, useEffect } from "react";
import { Table, Card, Button } from "antd";
import RiskDrawerFormSection from "./risk-drawer-form-section";

import "./index.less";

const CrmRiskIndicatorMgt = () => {
	const dataSource1 = [
		{
			key: "1",
			index: 1,
			riskType: "CRM-新增原因",
			riskIndicatorName: "充电盖板开启后会自行关闭",
			presetTotal: 165,
			presetIncrement: 56,
			timeDimension: "今日"
		},
		{
			key: "2",
			index: 2,
			riskType: "CRM-新增原因",
			riskIndicatorName: "车辆制动/刹车异响",
			presetTotal: 42,
			presetIncrement: 12,
			timeDimension: "今日"
		},
		{
			key: "3",
			index: 3,
			riskType: "CRM-新增原因",
			riskIndicatorName: "车辆无法启动",
			presetTotal: 72,
			presetIncrement: 12,
			timeDimension: "今日"
		},
		{
			key: "4",
			index: 4,
			riskType: "CRM-现存原因",
			riskIndicatorName: "价格变动大",
			presetTotal: 21,
			presetIncrement: 11,
			timeDimension: "今日"
		},
		{
			key: "5",
			index: 5,
			riskType: "CRM-现存原因",
			riskIndicatorName: "车辆联通无网络/网络信号差",
			presetTotal: 19,
			presetIncrement: 9,
			timeDimension: "今日"
		},
		{
			key: "6",
			index: 6,
			riskType: "CRM-现存原因",
			riskIndicatorName: "滚轮只能调节导航音量",
			presetTotal: 7,
			presetIncrement: 2,
			timeDimension: "本月"
		},
		{
			key: "7",
			index: 7,
			riskType: "CRM-现存原因",
			riskIndicatorName: "产品功能更新不及时",
			presetTotal: 6,
			presetIncrement: 1,
			timeDimension: "本周"
		},
		{
			key: "8",
			index: 8,
			riskType: "CRM-新增原因",
			riskIndicatorName: "悬挂及避震硬",
			presetTotal: 3,
			presetIncrement: 0,
			timeDimension: "今日"
		},
		{
			key: "9",
			index: 9,
			riskType: "CRM-现存原因",
			riskIndicatorName: "车辆空调除雾或除霜失效/效果差",
			presetTotal: 3,
			presetIncrement: 0,
			timeDimension: "本月"
		},
		{
			key: "10",
			index: 10,
			riskType: "CRM-现存原因",
			riskIndicatorName: "整体都不满意",
			presetTotal: 1,
			presetIncrement: 0,
			timeDimension: "本周"
		},
		{
			key: "11",
			index: 1,
			riskType: "CRM-现存原因",
			riskIndicatorName: "倒车雷达有死角",
			presetTotal: 1,
			presetIncrement: 11,
			timeDimension: "本周",
			label1: 10,
			label2: 10,
			label3: 10
		},
		{
			key: "12",
			index: 12,
			riskType: "CRM-新增原因",
			riskIndicatorName: "后座舒适度不够",
			presetTotal: 0,
			presetIncrement: 9,
			timeDimension: "本月",
			label1: 20,
			label2: 40,
			label3: 15
		},
		{
			key: "13",
			index: 13,
			riskType: "CRM-现存原因",
			riskIndicatorName: "内饰过于简陋",
			presetTotal: 0,
			presetIncrement: 5,
			timeDimension: "本周",
			label1: 30,
			label2: 20,
			label3: 3
		},
		{
			key: "14",
			index: 14,
			riskType: "CRM-现存原因",
			riskIndicatorName: "价格变动大",
			presetTotal: 0,
			presetIncrement: 2,
			timeDimension: "今日",
			label1: 40,
			label2: 30,
			label3: 4
		},
		{
			key: "15",
			index: 15,
			riskType: "CRM-现存原因",
			riskIndicatorName: "高速噪音有点大",
			presetTotal: 0,
			presetIncrement: 2,
			timeDimension: "本周",
			label1: 50,
			label2: 40,
			label3: 5
		},
		{
			key: "16",
			index: 16,
			riskType: "CRM-现存原因",
			riskIndicatorName: "前机盖左右两侧",
			presetTotal: 0,
			presetIncrement: 2,
			timeDimension: "本月",
			label1: 10,
			label2: 60,
			label3: 5
		},
		{
			key: "17",
			index: 17,
			riskType: "CRM-新增原因",
			riskIndicatorName: "车漆太薄",
			presetTotal: 0,
			presetIncrement: 1,
			timeDimension: "本周",
			label1: 20,
			label2: 70,
			label3: 6
		},
		{
			key: "18",
			index: 18,
			riskType: "CRM-现存原因",
			riskIndicatorName: "维修费用太贵",
			presetTotal: 0,
			presetIncrement: 0,
			timeDimension: "今日",
			label1: 30,
			label2: 80,
			label3: 7
		},
		{
			key: "19",
			index: 19,
			riskType: "CRM-现存原因",
			riskIndicatorName: "降价太夸张",
			presetTotal: 0,
			presetIncrement: 0,
			timeDimension: "今日",
			label1: 40,
			label2: 90,
			label3: 8
		},
		{
			key: "110",
			index: 110,
			riskType: "CRM-现存原因",
			riskIndicatorName: "电脑反应慢",
			presetTotal: 0,
			presetIncrement: 0,
			timeDimension: "今日",
			label1: 50,
			label2: 90,
			label3: 9
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
			title: "预设总量",
			dataIndex: "presetTotal",
			key: "presetTotal",
			width: 100,
			align: "center",
			sorter: true
		},
		{
			title: "预设增量",
			dataIndex: "presetIncrement",
			key: "presetIncrement",
			width: 100,
			align: "center",
			sorter: true,
			render: (text: number) => {
				if (text) {
					return `${text}%`;
				} else {
					return "-";
				}
			}
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
								setDispRecord(record);
								showDrawer();
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

	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [dispRecord, setDispRecord] = useState<any>(null);
	const showDrawer = () => {
		setOpenDrawer(true);
	};

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
		<>
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
			<RiskDrawerFormSection
				openDrawer={openDrawer}
				dispRecord={dispRecord}
				closeDrawerCallback={(val: any) => {
					setOpenDrawer(val);
				}}
			/>
		</>
	);
};

export default CrmRiskIndicatorMgt;
