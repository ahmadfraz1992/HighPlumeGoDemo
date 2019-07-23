// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import SimpleSelect from "components/Select/SimpleSelect.jsx";
import Button from "@material-ui/core/Button";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as aTypes from "types/ActionTypes";
import * as qTypes from "types/QuestionTypes";
import Hidden from "@material-ui/core/Hidden";
import FieldsView from "components/Fields/FieldsView";
import { primaryColor } from "assets/jss/material-dashboard-react.jsx";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
import FormSidePanel from "Container/FormSidePanel.jsx";
import TableHP from "components/Table/TableHP.jsx";
import { withRouter } from "react-router";

const styles = {
  root: {
    width: "100%"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  expanded: {
    backgroundColor: primaryColor[3]
  }
};

let counter = 0;
function createData(cid, name, amount, alert) {
  counter += 1;
  return { id: counter, cid, name, amount, alert };
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
    id: "liability",
    numeric: false,
    disablePadding: false,
    label: "Liabilites"
  },
  {
    id: "amount",
    numeric: false,
    disablePadding: false,
    label: "In Dollars (omit cents)"
  }
];

function Padding1(props) {
  return <div style={{ padding: "0px 10px 10px" }}>{props.children}</div>;
}

class FormWithTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpTextCard: "",
      label: "",
      fieldData: [],
      formType: qTypes.ASSETS,
      commText: "",
      fixedClasses: "dropdown",
      value: 0,
      selected_customer_id: "",
      dataLen: 5,
      data: [],
      comm: [],
      commAbsIndex: 0,
      currIndex: 0,
      loading: false,
      currFormIndex: 2
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFixedClick = this.handleFixedClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.loadCustomerData = this.loadCustomerData.bind(this);
    //   this.loadCustomerDataII = this.loadCustomerDataII.bind(this);
  }

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  handleFormClick(e) {
    let id = e.currentTarget.id;
    let showForm = false;
    let qType = qTypes.GENERAL_INFORMATION;
    if (id === "0") {
      qType = qTypes.GENERAL_INFORMATION;
      showForm = true;
    } else if (id === "1") {
      qType = qTypes.INDIVIDUAL_INFORMATION;
      showForm = true;
    } else if (id === "2") {
      qType = qTypes.ASSETS;
    }

    this.props.dispatch({
      type: aTypes.SET_CURRENT_STATE,
      current_state: { type: qType, index: 0 }
    });

    if (showForm) {
      this.props.history.push("/customer/applicationform");
    } else {
      this.setState({ formType: qType, fieldData: [], currFormIndex: id });
      //this.loadFields(qType);
      //      this.props.history.push("/customer/individualinfo");
    }
  }

  qprocess(index) {
    this.setState({
      commText: this.props.comm[index].text,
      comm: this.props.comm[index].text,
      commAbsIndex: index
    });
    this.props.dispatch({
      type: aTypes.SET_CURRENT_STATE,
      current_state: { type: this.props.current_state.type, index: index }
    });
  }

  FindAbsoluteIndex(relativeIndex) {
    let i = 0;
    for (i = 0; i < this.props.comm.length; i++) {
      if (
        this.props.comm[i].type === this.props.current_state.type &&
        this.props.comm[i].index === relativeIndex
      ) {
        return i;
      }
    }
  }
  handleClick = (e, index, id) => {
    this.qprocess(this.FindAbsoluteIndex(index));
    this.setState({
      currIndex: index,
      helpTextCard: this.props.assetHelp[id - 1].text
    });
  };

  loadCustomerData = () => {
    let temp = new Array(this.props.assets.length);
    this.setState({ loading: true });
    for (var i = 0; i < this.props.assets.length; i++) {
      temp[i] = createData(
        this.props.assets[i].id,
        this.props.assets[i].name,
        this.props.assets[i].amount,
        this.props.assets[i].alert
      );
    }
    counter = 0;
    this.setState({ data: temp, loading: false });
  };

  /*   loadCustomerDataII = () => {
    let temp = new Array(this.props.assets.length+1);
    this.setState({ loading: true });
    var i = 0;
    for (i = 0; i < this.props.assets.length; i++) {
      temp[i] = createData(
        this.props.assets[i].id,
        this.props.assets[i].name,
        this.props.assets[i].amount,
        this.props.assets[i].alert
      );
    }
    temp[i] = createData("2000", "Cash Cash", "$110", false);
    this.setState({ data: temp, loading: false });
  }; */

  UNSAFE_componentWillMount() {
    this.loadCustomerData();
  }

  /*   shouldComponentUpdate (nextProps, nextState){
    return true;
  } */

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <p className={classes.cardCategoryWhite}>
                  {this.props.formsList[this.state.currFormIndex].name}
                </p>
              </CardHeader>
              <CardBody>
                <TableHP
                  data={this.state.data}
                  columns={columns}
                  handleClick={this.handleClick}
                />
              </CardBody>
              {/*               <CardFooter>
                <Button color="primary" onClick={this.loadCustomerDataII}>
                  Update Data
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Hidden smDown implementation="css">
              <FormSidePanel
                label={this.state.label}
                helpTextCard={this.state.helpTextCard}
                commText={this.state.commText}
                handleFormClick={this.handleFormClick}
                comm={this.state.comm}
                commAbsIndex={this.state.commAbsIndex}
                currIndex={this.state.currIndex}
                loadCustomerData={this.loadCustomerData}
              />
            </Hidden>
          </GridItem>
        </GridContainer>
        <Hidden mdUp implementation="css">
          <FixedPlugin
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
            label={this.state.label}
            helpTextCard={this.state.helpTextCard}
            commText={this.state.commText}
            handleFormClick={this.handleFormClick}
            comm={this.state.comm}
            commAbsIndex={this.state.commAbsIndex}
            currIndex={this.state.currIndex}
            loadCustomerData={this.loadCustomerData}
          />
        </Hidden>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_state: state.current_state,
    fields: state.fields,
    comm: state.comm,
    selected_customer_id: state.selected_customer_id,
    assets: state.assets,
    formsList: state.formsList,
    assetHelp: state.assetHelp
  };
};
export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(FormWithTable))
);
