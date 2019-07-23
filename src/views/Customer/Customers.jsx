/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

//import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { withRouter } from "react-router";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import Button from "components/CustomButtons/Button.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { connect } from "react-redux";
import TableHPCheckBox from "components/Table/TableHPCheckBox.jsx";
import TableHP from "components/Table/TableHP.jsx";
import * as aTypes from "../../types/ActionTypes";
import * as qTypes from "../../types/QuestionTypes";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

let counter = 0;
function createData(cid, cname, template, moddate) {
  counter += 1;
  return { id: counter, cid, cname, template, moddate };
}
/*     const columns = ["ID", "Company Name", "Template"];*/
const columns = [
  {
    id: "cid",
    numeric: false,
    disablePadding: false,
    label: "ID"
  },
  {
    id: "cname",
    numeric: false,
    disablePadding: false,
    label: "Company Name"
  },
  { id: "template", numeric: false, disablePadding: false, label: "Template" },
  {
    id: "moddate",
    numeric: false,
    disablePadding: false,
    label: "Last Modified"
  }
];

class Customers extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      selected_customer_id: "",
      dataLen: 5,
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick = (e, index) => {
    this.props.dispatch({
      type: aTypes.SET_SELECTED_CUSTOMER_ID,
      selected_customer_id: this.state.data[index].cid
    });
    this.props.history.push("/bankadmin/customerdetail");
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  loadCustomerData = () => {
    let temp = new Array(this.state.dataLen);
    for (var i = 0; i < this.state.dataLen; i++) {
      temp[i] = createData(
        this.props.customers[i].id,
        this.props.customers[i].name,
        this.props.customers[i].template_name,
        this.props.customers[i].date_mod
      );
    }
    this.setState({ data: temp });
  };

  componentWillMount() {
    this.loadCustomerData();
  }

  render() {
    const { classes } = this.props;
    const { match, location, history } = this.props;
//    const { customers } = this.props;

    return (
      <div>
{/*         <GridContainer>
          <GridItem xs={12} sm={12} md={6}> */}
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Customers</h4>
                <p className={classes.cardCategoryWhite}>
                  Click on a customer to update record
                </p>
              </CardHeader>
              <CardBody>
                <TableHP
                  data={this.state.data}
                  columns={columns}
                  handleClick={this.handleClick}
                />
              </CardBody>
              <CardFooter>
                <Button color="primary">Upload Document</Button>
              </CardFooter> 
            </Card>
{/*           </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

Customers.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    selected_customer_id: state.selected_customer_id,
    current_state: state.current_state,
    fields: state.fields,
    customers: state.customers
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(Customers))
);
//withRouter(connect(mapStateToProps)(App));

//onClick={() => {
//  history.push("/bankadmin/customerdetail");
//}}
