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

function Padding1(props) {
  return <div style={{ padding: "0px 10px 10px" }}>{props.children}</div>;
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpTextCard: "",
      label: "",
      fieldData: [],
      formType: qTypes.GENERAL_INFORMATION,
      commText: "",
      comm: [],
      commAbsIndex: 0,
      fixedClasses: "dropdown",
      currFormIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.FindAbsoluteIndex = this.FindAbsoluteIndex.bind(this);
    this.qprocess = this.qprocess.bind(this);
  }

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  commPrint() {
    return { __html: this.state.commText };
  }

  qprocess(index) {
    this.setState({
      helpTextCard: this.props.fields[index].text,
      label: this.props.fields[index].label,
      commText: this.props.comm[index].text,
      comm: this.props.comm[index].text,
      commAbsIndex: index
    });
    this.props.dispatch({
      type: aTypes.SET_CURRENT_STATE,
      current_state: { type: this.props.current_state.type, index: index }
    });
  }

  handleClick(e) {
    let index = parseInt(e.target.id, 10);
    this.qprocess(this.FindAbsoluteIndex(index));
  }

  handleFormClick(e) {
    debugger;
    let id = e.currentTarget.id;
    let qType = qTypes.GENERAL_INFORMATION;
    if (id === "0") {
      qType = qTypes.GENERAL_INFORMATION;
    } else if (id === "1") {
      qType = qTypes.INDIVIDUAL_INFORMATION;
    } else if (id === "2") {
      qType = qTypes.ASSETS;
      this.props.dispatch({
        type: aTypes.SET_CURRENT_STATE,
        current_state: { type: qType, index: 0 }
      });
      this.props.history.push("/customer/applicationform");
      return;
    }
    this.props.dispatch({
      type: aTypes.SET_CURRENT_STATE,
      current_state: { type: qType, index: 0 }
    });
    this.setState({ formType: qType, fieldData: [], currFormIndex: id });
    this.loadFields(qType);
    //      this.props.history.push("/customer/individualinfo");
  }

  FindAbsoluteIndex(relativeIndex) {
    let i = 0;
    for (i = 0; i < this.props.fields.length; i++) {
      if (
        this.props.fields[i].type === this.props.current_state.type &&
        this.props.fields[i].index === relativeIndex
      ) {
        return i;
      }
    }
  }

  loadFields(fieldType) {
    debugger;
    let i = 0;
    let fieldData_temp = [];
    for (i = 0; i < this.props.fields.length; i++) {
      if (this.props.fields[i].type === fieldType) {
        fieldData_temp.push({
          label: this.props.fields[i].label,
          text: this.props.fields[i].text
        });
      }
    }
    this.setState({ fieldData: fieldData_temp });
  }

  UNSAFE_componentWillMount() {
    debugger;
    this.loadFields(this.props.current_state.type);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.current_state.type !== this.props.current_state.type) {
      this.setState({ formType: nextProps.current_state.type });
      this.loadFields(nextProps.current_state.type);
    }
  }
  render() {
    const { classes } = this.props;
    const data = [
      { value: 0, text: "1st" },
      { value: 1, text: "2nd" },
      { value: 2, text: "3rd" },
      { value: 4, text: "4th" }
    ];

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
                {this.state.currFormIndex == 1 && (
                  <SimpleSelect
                    data={data}
                    selected={this.props.selected_customer_id}
                    label="Additonal Party"
                  />
                )}
                <FieldsView
                  fieldData={this.state.fieldData}
                  handleClick={this.handleClick}
                />
              </CardBody>
              {/*               <CardFooter>
                <Button color="primary">Set up an appointment</Button>
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
    formsList: state.formsList
  };
};
export default withRouter(connect(mapStateToProps)(withStyles(styles)(Form)));
