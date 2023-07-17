import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../components/Client/Home/Home";
import ClientLayout from "../Layout/ClientLayout.jsx/ClientLayout";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: DefaultLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: DefaultLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
];
