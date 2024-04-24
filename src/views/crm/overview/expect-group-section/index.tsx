import { useState, useEffect } from "react";
import { Select, Card, Col, Row, Button } from "antd";
import BarItem from "@/views/components/bar-item";
import FuncBarItem from "@/views/components/bar-item/func-bar-chart";
import HorizontalBarItem from "@/views/components/horizontal-bar-item";
import "../index.less";

// const { TabPane } = Tabs;

const ExpectGroupSection = () => {
	const onChange = (key: any) => {
		console.log(key);
	};

	const [barData1, setBarData1] = useState<any>([]);
	const [barData2, setBarData2] = useState<any>([]);
	const [barData3, setBarData3] = useState<any>([]);

	const regionData = ["上海市", "华东大区", "华北大区"];
	const provinceData = ["上海市", "浙江省", "江苏省"];
	const cityData = ["上海市", "杭州市", "宁波市", "温州市", "南京市", "苏州市", "镇江市"];
	const vehicleModelData = ["Model3", "ModelX", "ModelY"];

	useEffect(() => {
		setBarData1([
			{ value: 43, spotName: "软件功能" },
			{ value: 90, spotName: "硬件功能" }
		]);

		setBarData2([
			{ value: 190, spotName: "座椅通风" },
			{ value: 134, spotName: "换电" },
			{ value: 98, spotName: "遮阳帘" },
			{ value: 49, spotName: "空气悬挂" },
			{ value: 30, spotName: "对外放电" },
			{ value: 15, spotName: "雨刮优化" },
			{ value: 8, spotName: "仪表盘" },
			{ value: 8, spotName: "抬头显示" },
			{ value: 6, spotName: "座椅按摩" },
			{ value: 6, spotName: "车载冰箱" },
			{ value: 6, spotName: "电吸门" },
			{ value: 4, spotName: "空调控制" },
			{ value: 4, spotName: "电动天窗" },
			{ value: 2, spotName: "方向盘加热" },
			{ value: 1, spotName: "后视镜" },
			{ value: 1, spotName: "香氛" }
		]);

		setBarData3([
			{ value: 269, spotName: "自动驾驶" },
			{ value: 149, spotName: "地图导航" },
			{ value: 89, spotName: "360影像" },
			{ value: 89, spotName: "模式优化" },
			{ value: 49, spotName: "停车辅助" },
			{ value: 45, spotName: "语音交互优化" },
			{ value: 27, spotName: "音乐软件" },
			{ value: 9, spotName: "语音本地化" },
			{ value: 7, spotName: "手机投屏" },
			{ value: 3, spotName: "语音唤醒" },
			{ value: 1, spotName: "第三方应用商城" },
			{ value: 1, spotName: "蓝牙连接车机" }
		]);
	}, []);

	// const [cities, setCities] = useState<any>([]);
	const [secondCity, setSecondCity] = useState<any>();

	const handleProvinceChange = (value: string) => {
		// TODO
	};

	const onSecondCityChange = (value: any) => {
		setSecondCity(value);
	};

	return (
		<Card className="card-section">
			<div className="tab-satisfaction-header">
				<div className="tab-satisfaction-select-box">
					<Select
						style={{ width: 170 }}
						placeholder="区域"
						mode="multiple"
						maxTagCount={1}
						options={regionData.map(region => ({ label: region, value: region }))}
					/>
					<Select
						placeholder="省"
						mode="multiple"
						maxTagCount={1}
						style={{ width: 155 }}
						onChange={handleProvinceChange}
						options={provinceData.map(province => ({ label: province, value: province }))}
					/>
					<Select
						placeholder="市"
						mode="multiple"
						maxTagCount={1}
						style={{ width: 155 }}
						value={secondCity}
						onChange={val => onSecondCityChange(val)}
						options={cityData.map((city: any) => ({ label: city, value: city }))}
					/>
					<Select
						mode="multiple"
						maxTagCount={1}
						style={{ width: 155 }}
						placeholder="车型"
						options={vehicleModelData.map(vehicleModel => ({ label: vehicleModel, value: vehicleModel }))}
					/>
				</div>
				<div className="tab-satisfaction-right-box">
					<Button type="text">重置</Button>
					<Button type="text">下载</Button>
				</div>
			</div>
			<Row gutter={10}>
				<Col span={24}>
					<div className="card-chart-title expect-title">硬件&软件功能</div>
					<FuncBarItem barData={barData1}></FuncBarItem>
				</Col>
			</Row>
			<Row gutter={10}>
				<Col span={24}>
					<div className="card-chart-title expect-title">硬件（个）</div>
					<HorizontalBarItem barData={barData2}></HorizontalBarItem>
				</Col>
			</Row>
			<Row gutter={10}>
				<Col span={24}>
					<div className="card-chart-title">软件（个）</div>
					<HorizontalBarItem barData={barData3}></HorizontalBarItem>
				</Col>
			</Row>
		</Card>
	);
};

export default ExpectGroupSection;
