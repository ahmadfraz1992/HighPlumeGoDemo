import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

//import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import TableHP from "components/Table/TableHP.jsx";
import * as aTypes from "../../types/ActionTypes";

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
function createData(cid, cname, template, moddate, alert) {
  counter += 1;
  return { id: counter, cid, cname, template, moddate, alert };
}
/*     const columns = ["ID", "Company Name", "Template"];*/
const columns = [
  /*   {
    id: "alert",
    numeric: false,
    disablePadding: false,
    label: "Alert"
  },
 */ {
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
    this.props.history.push("/bankadmin/customerform");
//    this.props.history.push("/customer/applicationform");
//    this.props.history.push("/bankadmin/customerdetail");
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  loadCustomerData = () => {
    let temp = new Array(this.props.prospects.length);
    for (var i = 0; i < this.props.prospects.length; i++) {
      temp[i] = createData(
        this.props.prospects[i].id,
        this.props.prospects[i].name,
        this.props.prospects[i].template_name,
        this.props.prospects[i].date_mod,
        this.props.prospects[i].alert
      );
    }
    this.setState({ data: temp });
  };

  UNSAFE_componentWillMount() {
    this.loadCustomerData();
  }

  render() {
    const { classes } = this.props;
    const { match, location, history } = this.props;
    //    const { prospects } = this.props;

    return (
      <div>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Prospects</h4>
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
        </Card>
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
    prospects: state.prospects
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(Customers))
);
//withRouter(connect(mapStateToProps)(App));

//onClick={() => {
//  history.push("/bankadmin/customerdetail");
//}}
