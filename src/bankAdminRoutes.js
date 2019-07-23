// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import CustomerDashboard from "views/Dashboard/CustomerDashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import IndividualInfo from "views/Individual/IndividualInfo.jsx";
//import Customers from "views/Customer/Customers.jsx";
import CustomerDetail from "views/Customer/CustomerDetail.jsx";
import CreateTemplate from "views/Template/CreateTemplate.jsx";
import BankerHomePage from "views/Dashboard/BankerHomePage.jsx";
import FormContainer from "Container/FormContainer.jsx";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.jsx";

const bankAdminRoutes = [
  {
    path: "/dashboard",
    name: "Homepage",
    rtlName: "قائمة الجدول",
    icon: Dashboard,
    component: BankerHomePage,
    layout: "/bankadmin"
  },
  {
    path: "/customerform",
    name: "Customer Form",
    rtlName: "قائمة الجدول",
    icon: Person,
    component: FormContainer,
    layout: "/bankadmin"
  },
  {
    path: "/templatenewcustomer",
    name: "New Customer - Template",
    rtlName: "قائمة الجدول",
    icon: Person,
    component: CreateTemplate,
    layout: "/bankadmin"
  },
  {
    path: "/dashboard",
    name: "Customer Portal",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: CustomerDashboard,
    layout: "/customer"
  }
];

export default bankAdminRoutes;
