import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
//import withStyles from "@material-ui/core/styles/withStyles";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

// core components
//import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import MUIDataTable from "mui-datatables";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import Button from "components/CustomButtons/Button.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const columns = ["ID", "Name", "Date Modified"];

const data = [
  ["1000001", "Retail-1", "2019-03-07"],
  ["1000002", "Restaurant-3", "2019-02-08"],
  ["1000003", "Retail-Specialized-1", "2018-11-26"],
  ["1000004", "Custom", "2018-09-09"],
  ["1000005", "Software-1", "2019-04-11"],
  ["1000006", "Retail-Specialized-2", "2019-07-23"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"],
  ["1000007", "Practice-2", "2019-01-17"]
];

const options = {
  filterType: "checkbox",
  responsive: "stacked",
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 20, 50],
  selectableRows: true,
  onRowClick: (rowData, rowState) => {
    alert(rowData, rowState);
  }
};

class Customers extends React.Component {
  state = {
    value: 0
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "#FF000",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "300",
            lineHeight: "1.5em"
          },
          paper: {
            boxShadow: "none"
          }
        },
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FF000",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "300",
            lineHeight: "1.5em"
          }
        },
        MUIDataTableHeadCell: {
          root: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "300",
            lineHeight: "1.5em",
            fontSize: "1.2em",
            color: "#ff9800"
          }
        },
        MUIDataTableToolbarSelect: {
          root: {
            backgroundColor: "#fff",
            boxShadow: "none"
          }
        }
      },
      typography: {
        useNextVariants: true
      },
      typography: {
        useNextVariants: true
      }
    });

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Templates</h4>
            <p className={classes.cardCategoryWhite}>
              Click on a template to update record
            </p>
          </CardHeader>
          <CardBody>
            <MuiThemeProvider theme={this.getMuiTheme()}>
              <MUIDataTable
                title={""}
                data={data}
                columns={columns}
                options={options}
              />
            </MuiThemeProvider>
          </CardBody>
          <CardFooter>
            <Button color="primary">Edit Template</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

Customers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Customers);
