// import React from "react";
// import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import CrmOverview from "@/views/crm/overview/index";
import CrmListView from "@/views/crm/list-view/index";

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
				},
				children: [
					{
						path: "/crm/overview/listview",
						element: <CrmListView />,
						meta: {
							requiresAuth: false,
							title: "查看全部",
							key: "CrmListView"
						}
					}
				]
			},
			{
				path: "/crm/listview",
				element: <CrmListView />,
				meta: {
					requiresAuth: false,
					title: "查看全部",
					key: "CrmListView"
				}
			}
		]
	}
];

export default crmRouter;
