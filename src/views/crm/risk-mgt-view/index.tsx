import { Tabs } from "antd";

import CrmCurrentRiskMgt from "./current-risk-mgt";
import CrmRiskIndicatorMgt from "./risk-indicator-mgt";
import "./index.less";

const CrmRiskView = () => {
	return (
		<div className="crm-risk-view-box">
			<div className="tabs-section">
				<Tabs defaultActiveKey="1">
					<Tabs.TabPane tab="当前风险事项列表" key="1">
						<CrmCurrentRiskMgt />
					</Tabs.TabPane>
					<Tabs.TabPane tab="风险指标设置" key="2">
						<CrmRiskIndicatorMgt />
					</Tabs.TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default CrmRiskView;
