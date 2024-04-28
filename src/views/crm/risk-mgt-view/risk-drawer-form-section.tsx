import { useState, useEffect } from "react";
import { Space, Button, Form, Col, Row, Drawer, Input, InputNumber, Select } from "antd";
import "./index.less";

const RiskDrawerFormSection = (props: any) => {
	const { openDrawer, dispRecord, closeDrawerCallback } = props;

	// subject type opts
	const timeDimensions = [
		{ value: "今日", label: "今日" },
		{ value: "本周", label: "本周" },
		{ value: "本月", label: "本月" }
	];

	const [form] = Form.useForm();
	const timeDimensionValue = Form.useWatch("timeDimension", form);
	const onCloseDrawer = () => {
		closeDrawerCallback(false);
	};

	useEffect(() => {
		if (openDrawer) {
			const fiedlVals = Object.assign({}, dispRecord);
			form.setFieldsValue(fiedlVals);
		}
	}, [openDrawer]);

	function onValuesChange(changedValues: any, allValues: any) {
		form.setFieldsValue(allValues);
	}
	return (
		<Drawer
			title="风险触发条件"
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
						className="risk-drawer-form-section"
						layout="vertical"
						form={form}
						onValuesChange={(changedValues, allValues) => onValuesChange(changedValues, allValues)}
					>
						<Form.Item name="riskIndicatorName" label="风险指标名称">
							<Input disabled />
						</Form.Item>
						<Form.Item name="riskType" label="风险类型">
							<Input disabled />
						</Form.Item>
						<Form.Item name="timeDimension" label="时间维度">
							<Select options={timeDimensions} />
						</Form.Item>
						<Form.Item name="presetTotal" label="风险预警阀值-消息总量（条）">
							<InputNumber min={0} />
						</Form.Item>
						<Form.Item name="presetIncrement" label="风险预警阀值-消息增量（百分比）">
							<InputNumber min={0} formatter={value => `${value}%`} />
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Drawer>
	);
};

export default RiskDrawerFormSection;
