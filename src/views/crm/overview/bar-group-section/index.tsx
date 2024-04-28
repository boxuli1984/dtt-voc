import { useState, useEffect } from "react";
import { Select, Card, Col, Row, Button } from "antd";
import BarItem from "@/views/components/bar-item";
import "../index.less";

// const { TabPane } = Tabs;

const BarGroupSection = () => {
	const onChange = (key: any) => {
		console.log(key);
	};

	const [barData1, setBarData1] = useState<any>([]);
	const [barData2, setBarData2] = useState<any>([]);
	const [barData3, setBarData3] = useState<any>([]);

	const satisfactionData = ["对产品最满意的方面", "整体不满意的方面", "对产品最不满意的方面"];
	const regionData = ["上海市", "华东大区", "华北大区"];
	const provinceData = ["上海市", "浙江省", "江苏省"];
	const cityData = ["上海市", "杭州市", "宁波市", "温州市", "南京市", "苏州市", "镇江市"];
	const vehicleModelData = ["Model3", "ModelX", "ModelY"];

	useEffect(() => {
		setBarData1([
			{ value: 10, spotName: "售后体验" },
			{ value: 30, spotName: "用车体验" },
			{ value: 43, spotName: "售前体验" },
			{ value: 70, spotName: "充电体验" },
			{ value: 90, spotName: "其他" }
		]);

		setBarData2([
			{ value: 3, spotName: "充电体验" },
			{ value: 3, spotName: "价格" },
			{ value: 8, spotName: "超充" },
			{ value: 10, spotName: "400客服" },
			{ value: 30, spotName: "品牌和文化" },
			{ value: 149, spotName: "售后政策" },
			{ value: 198, spotName: "软件体验" },
			{ value: 234, spotName: "主观感受" },
			{ value: 290, spotName: "硬件体验" }
		]);

		setBarData3([
			{ value: 1, spotName: "车漆" },
			{ value: 1, spotName: "价格过高" },
			{ value: 3, spotName: "路噪" },
			{ value: 3, spotName: "风噪" },
			{ value: 3, spotName: "软件集成" },
			{ value: 7, spotName: "交互体验" },
			{ value: 7, spotName: "环保" },
			{ value: 9, spotName: "用车成本" },
			{ value: 27, spotName: "NVH" },
			{ value: 37, spotName: "电池＆续航" },
			{ value: 38, spotName: "售后政策" },
			{ value: 43, spotName: "外观造型" },
			{ value: 45, spotName: "安全" },
			{ value: 49, spotName: "性能＆加速" },
			{ value: 89, spotName: "舒适性" },
			{ value: 89, spotName: "地图导航" },
			{ value: 149, spotName: "辅助驾驶" },
			{ value: 369, spotName: "操控" }
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
						defaultValue={satisfactionData[0]}
						style={{ width: 200 }}
						options={satisfactionData.map(satisfaction => ({ label: satisfaction, value: satisfaction }))}
					/>
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
				<Col span={8}>
					<div className="card-chart-title">一级分类（个）</div>
					<BarItem barData={barData1}></BarItem>
				</Col>
				<Col span={8}>
					<div className="card-chart-title">二级分类（个）</div>
					<BarItem barData={barData2}></BarItem>
				</Col>
				<Col span={8}>
					<div className="card-chart-title">三级分类（个）</div>
					<BarItem barData={barData3}></BarItem>
				</Col>
			</Row>
		</Card>
	);
};

export default BarGroupSection;
