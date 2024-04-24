// import React from "react";
// import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import CrmOverview from "@/views/crm/overview/index";

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
			}
		]
	}
];

export default crmRouter;
