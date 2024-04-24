import { useState, useEffect } from "react";
import { Space, Button, Form, Col, Row, Drawer, Input, Select } from "antd";
import "./index.less";

const DrawerFormSection = (props: any) => {
	const { openDrawer, dispRecord, closeDrawerCallback } = props;

	// exist subject opts
	const existSubjectOpts = [
		{
			value: 1,
			label: "电池续航短"
		},
		{
			value: 2,
			label: "超充费用太高"
		},
		{
			value: 3,
			label: "场地准入受限制"
		},
		{
			value: 4,
			label: "价格变动大"
		},
		{
			value: 5,
			label: "零部件质量问题多"
		},
		{
			value: 6,
			label: "座椅不舒服"
		},
		{
			value: 7,
			label: "产品功能更新不及时"
		},
		{
			value: 8,
			label: "悬挂及避震硬"
		},
		{
			value: 9,
			label: "雨刮器不够智能"
		},
		{
			value: 10,
			label: "整体都不满意"
		},

		{
			value: 11,
			label: "倒车雷达有死角"
		},
		{
			value: 12,
			label: "后座舒适度不够"
		},
		{
			value: 13,
			label: "内饰过于简陋"
		},
		{
			value: 14,
			label: "价格变动大"
		},
		{
			value: 15,
			label: "高速噪音有点大"
		},
		{
			value: 16,
			label: "前机盖左右两侧"
		},
		{
			value: 17,
			label: "车漆太薄"
		},
		{
			value: 18,
			label: "维修费用太贵"
		},
		{
			value: 19,
			label: "降价太夸张"
		},
		{
			value: 20,
			label: "电脑反应慢"
		}
	];
	// label opts
	const label1Opts = [
		{ value: 10, label: "售后体验" },
		{ value: 20, label: "用车体验" },
		{ value: 30, label: "售前体验" },
		{ value: 40, label: "充电体验" },
		{ value: 50, label: "其他" }
	];
	const label2Opts = [
		{ value: 10, label: "售后政策" },
		{ value: 20, label: "价格" },
		{ value: 30, label: "软件体验" },
		{ value: 40, label: "主观感受" },
		{ value: 50, label: "品牌和文化" },
		{ value: 60, label: "400客服" },
		{ value: 70, label: "超充" },
		{ value: 80, label: "充电体验" },
		{ value: 90, label: "硬件体验" }
	];
	const label3Opts = [
		{ value: 1, label: "车漆" },
		{ value: 2, label: "价格" },
		{ value: 3, label: "路噪" },
		{ value: 4, label: "风噪" },
		{ value: 5, label: "软件集成" },
		{ value: 6, label: "交互体验" },
		{ value: 7, label: "环保" },
		{ value: 8, label: "用车成本" },
		{ value: 9, label: "NVH" },
		{ value: 10, label: "电池＆续航" },
		{ value: 11, label: "售后政策" },
		{ value: 12, label: "外观造型" },
		{ value: 13, label: "安全" },
		{ value: 14, label: "性能＆加速" },
		{ value: 15, label: "舒适性" },
		{ value: 16, label: "地图导航" },
		{ value: 17, label: "辅助驾驶" },
		{ value: 18, label: "操控" }
	];
	// subject type opts
	const subjectTypes = [
		{ value: 1, label: "新增满意度原因" },
		{ value: 2, label: "现存满意度原因" },
		{ value: 3, label: "无意义话题" }
	];

	const [form] = Form.useForm();
	const subjectTypeValue = Form.useWatch("subjectType", form);
	const onCloseDrawer = () => {
		closeDrawerCallback(false);
	};

	useEffect(() => {
		if (openDrawer) {
			const fiedlVals = Object.assign({}, dispRecord, {
				subjectType: 2,
				subjectAliasName: dispRecord?.subjectName
			});
			form.setFieldsValue(fiedlVals);
		}
	}, [openDrawer]);

	function onValuesChange(changedValues: any, allValues: any) {
		form.setFieldsValue(allValues);
	}
	return (
		<Drawer
			title="标记"
			placement="right"
			closable={true}
			destroyOnClose={true}
			onClose={() => onCloseDrawer()}
			visible={openDrawer}
			getContainer={false}
			className="tag-drawer-section"
			footer={
				<Space className="tag-drawer-footer">
					<Button onClick={() => onCloseDrawer()}>取消</Button>
					<Button onClick={() => onCloseDrawer()} type="primary">
						确定
					</Button>
				</Space>
			}
		>
			<Row gutter={10}>
				<Col span={24}>
					<Form
						layout="vertical"
						form={form}
						onValuesChange={(changedValues, allValues) => onValuesChange(changedValues, allValues)}
					>
						<Form.Item name="subjectName" label="话题名称">
							<Input disabled />
						</Form.Item>
						<Form.Item name="label1" label="标签" className="label-group">
							<Input.Group>
								<div>
									<Form.Item name="label1">
										<Select options={label1Opts} />
									</Form.Item>
								</div>
								<div>
									<Form.Item name="label2">
										<Select options={label2Opts} />
									</Form.Item>
								</div>
								<div>
									<Form.Item name="label3">
										<Select options={label3Opts} />
									</Form.Item>
								</div>
							</Input.Group>
						</Form.Item>
						<Form.Item name="subjectType" label="该话题属于">
							<Select options={subjectTypes} />
						</Form.Item>
						{subjectTypeValue == 1 && (
							<Form.Item name="subjectAliasName" label="话题别名">
								<Input />
							</Form.Item>
						)}
						{subjectTypeValue == 2 && (
							<Form.Item name="existSubject" label="关联话题">
								<Select showSearch notFoundContent={"无"} options={existSubjectOpts} optionFilterProp="label" />
							</Form.Item>
						)}
					</Form>
				</Col>
			</Row>
		</Drawer>
	);
};

export default DrawerFormSection;
