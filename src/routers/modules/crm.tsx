// import React from "react";
// import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import CrmOverview from "@/views/crm/overview/index";
import CrmListView from "@/views/crm/list-view/index";
import CrmDetailView from "@/views/crm/detail-view/index";
import CrmRiskMgtView from "@/views/crm/risk-mgt-view/index";

// crm 模块
const crmRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/crm/overview",
				// element: lazyLoad(React.lazy(() => import("@/views/crm/overview/index"))),
				element: <CrmOverview />,
				meta: {
					requiresAuth: false,
					title: "用户研究",
					key: "CrmOverview"
				}
				// children: [
				// 	{
				// 		path: "/crm/overview/listview",
				// 		element: <CrmListView />,
				// 		meta: {
				// 			requiresAuth: false,
				// 			title: "查看全部",
				// 			key: "CrmListView"
				// 		}
				// 	}
				// ]
			},
			{
				path: "/crm/overview/listview",
				element: <CrmListView />,
				meta: {
					requiresAuth: false,
					title: "查看全部",
					key: "CrmListView"
				}
			},
			{
				path: "/crm/overview/detailview",
				element: <CrmDetailView />,
				meta: {
					requiresAuth: false,
					title: "查看详情",
					key: "CrmDetailView"
				}
			},
			{
				path: "/crm/overview/risk",
				element: <CrmRiskMgtView />,
				meta: {
					requiresAuth: false,
					title: "风险预警",
					key: "CrmRiskMgtView"
				}
			}
		]
	}
];

export default crmRouter;
