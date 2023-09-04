import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import DefaultLayout from "../layout/DefaulLayout";
import Calendar from "../../pages/Calendar";
import Chart from "../../pages/Chart";
import FormElements from "../../pages/Form/FormElements";
import FormLayout from "../../pages/Form/FormLayout";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";
import Tables from "../../pages/Tables";
import Alerts from "../../pages/UiElements/Alerts";
import Buttons from "../../pages/UiElements/Buttons";
import Brand from "../../pages/brand";
import Transactions from "../../pages/transactions";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Products from "../../pages/products";
import SignIn from "../../pages/account/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          { path: "", element: <Dashboard /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "products", element: <Products /> },
          { path: "brand", element: <Brand /> },
          { path: "transactions", element: <Transactions /> },
          { path: "profile", element: <Profile /> },
          { path: "forms/form-elements", element: <FormElements /> },
          { path: "forms/form-layout", element: <FormLayout /> },
          { path: "tables", element: <Tables /> },
          { path: "settings", element: <Settings /> },
          { path: "chart", element: <Chart /> },

          { path: "ui/alerts", element: <Alerts /> },
          { path: "ui/buttons", element: <Buttons /> },
          { path: "ui/buttons", element: <Buttons /> },
          { path: "login", element: <SignIn /> },
        ],
      },
      {},
    ],
  },
]);
