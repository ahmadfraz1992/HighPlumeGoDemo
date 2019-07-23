// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import CustomerDashboard from "views/Dashboard/CustomerDashboard.jsx";
import BankerHomePage from "views/Dashboard/BankerHomePage.jsx";
import Form from "Container/Form.jsx";
import FormWithTable from "Container/FormWithTable.jsx";
import FormContainer from "Container/FormContainer.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: CustomerDashboard,
    layout: "/customer"
  },
  {
    path: "/applicationform",
    name: "Application Form",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: FormContainer,
    layout: "/customer"
  },

/*   {
    path: "/individualinfo",
    name: "Individual Information",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: IndividualInfo,
    layout: "/customer"
  }, */
  {
    path: "/dashboard",
    name: "Bank Portal",
    rtlName: "قائمة الجدول",
    icon: Dashboard,
    component: BankerHomePage,
    layout: "/bankadmin"
  }
];

export default dashboardRoutes;
