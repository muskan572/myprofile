import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Navbars } from "../modules/nav/navbars";
import { PATH_DASH } from "./path";
import { Homepage } from "../modules/home";

export function Router() {
  return useRoutes([
    { path: "/", element: <Navigate to={PATH_DASH.home} /> },
    {
      element: <Outlet />,
      children: [
        {
          path: PATH_DASH.root,
          element: <Navbars />,
          children: [{ path: PATH_DASH.home, element: <Homepage /> }],
        },
      ],
    },
  ]);
}
