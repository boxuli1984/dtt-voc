import { useState } from "react";
import { Statistic, Card, Col, Row, Table, Drawer } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, EditOutlined } from "@ant-design/icons";
import DrawerFormSection from "../components/drawer-form-section";
import "../index.less";

const CardListSection = () => {
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
		{
			title: "",
			dataIndex: "index",
			key: "index",
			render: (value: number) => {
				if (value <= 3) {
					return <div className="table-index idx-red">{value}</div>;
				} else {
					return <div className="table-index idx-grey">{value}</div>;
				}
			},
			width: 40
		},
		...columnsTmp
	];

	const dataSource2 = [
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
	const columns2: any = [
		{
			title: "",
			dataIndex: "index",
			key: "index",
			render: (value: number) => {
				if (value <= 3) {
					return <div className="table-index idx-blue">{value}</div>;
				} else {
					return <div className="table-index idx-grey">{value}</div>;
				}
			},
			width: 40
		},
		...columnsTmp,
		{
			title: "标记",
			dataIndex: "tagOpt",
			key: "tagOpt",
			width: 60,
			align: "center",
			render: (text: number, record: any) => {
				return (
					<EditOutlined
						onClick={() => {
							setDispRecord(record);
							showDrawer();
						}}
					/>
				);
			}
		}
	];

	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const [dispRecord, setDispRecord] = useState<any>(null);
	const showDrawer = () => {
		setOpenDrawer(true);
	};

	return (
		<>
			<Card className="card-section-2">
				<Row gutter={30}>
					<Col span={12}>
						<div className="card-list-header">
							<div className="card-list-title">Top原因</div>
							<div className="card-list-view-all">查看全部</div>
						</div>
						<div className="table-content">
							<Table dataSource={dataSource1} columns={columns1} pagination={false} size="small" />
						</div>
					</Col>
					<Col span={12}>
						<div className="card-list-header">
							<div className="card-list-title">新增原因</div>
							<div className="card-list-view-all">查看全部</div>
						</div>
						<div className="table-content">
							<Table dataSource={dataSource2} columns={columns2} pagination={false} size="small" />
						</div>
					</Col>
				</Row>
			</Card>

			<DrawerFormSection
				openDrawer={openDrawer}
				dispRecord={dispRecord}
				closeDrawerCallback={(val: any) => {
					setOpenDrawer(val);
				}}
			/>
		</>
	);
};

export default CardListSection;
