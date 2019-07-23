// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import avatar from "assets/img/faces/marc.jpg";
import custAvatar from "assets/img/faces/david_Niven.jpg";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "@material-ui/core/Button";
import FormNavList from "components/List/FormNavList.jsx";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

// core components
import React, { Component } from "react";
import { connect } from "react-redux";
import * as qTypes from "types/QuestionTypes";
import { primaryColor } from "assets/jss/material-dashboard-react.jsx";
import { withRouter } from "react-router-dom";
import * as aTypes from "types/ActionTypes";

const styles = {
  root: {
    width: "100%"
  },
  expanded: {
    backgroundColor: primaryColor[3]
  }
};

function Padding1(props) {
  return <div style={{ padding: "0px 10px 10px" }}>{props.children}</div>;
}

function Padding2(props) {
  return (
    <div
      style={{
        width: "90%",
        height: "100px",
        overflow: "auto",
        maxHeight: 150,
        textAlign: "left",
        padding: "0px 10px 10px"
      }}
    >
      {props.children}
    </div>
  );
}
/* function addComm(qtextArr, qindex, qtype) {
  this.props.dispatch({
    type: aTypes.ADD_COMM_INFO,
    comm: {
      type: qtype,
      text: qtextArr,
      index: qindex
    }
  });
} */

class FormSidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpTextCard: "",
      label: "",
      fieldData: [],
      formType: qTypes.GENERAL_INFORMATION,
      commText: "",
      localComm: [],
      color: "blue",
      hasImage: true,
      fixedClasses: "dropdown show"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* 
  commPrint() {
    return { __html: this.props.commText };
  } */

  handleChange = event => {
    this.setState({ commText: event.target.value });
  };
  handleSubmit = event => {
    //    addComm(this.state.commText, this.props.commIndex, qTypes.ASSETS);
    let tempComm = this.props.comm;
    if (this.props.userInfo.currentUser === qTypes.CUSTOMER) {
      tempComm.push({
        borrower: this.props.userInfo.customerName,
        text: this.state.commText
      });
    } else {
      tempComm.push({
        lender: this.props.userInfo.bankerName,
        text: this.state.commText
      });
    }

    this.props.dispatch({
      type: aTypes.UPDATE_COMM_INFO,
      comm: {
        type: qTypes.ASSETS,
        text: tempComm,
        index: this.props.commAbsIndex
      }
    });

    this.props.dispatch({
      type: aTypes.UPDATE_ASSET,
      asset: { index: this.props.currIndex, alert: true }
    });

    this.props.dispatch({
      type: aTypes.UPDATE_PROSPECT,
      prospect: { index: this.props.currIndex, alert: true }
    });

    this.setState({ localComm: tempComm, commText: "" });
    this.props.loadCustomerData();
  };

  UNSAFE_componentWillMount() {
    this.setState({ localComm: this.props.comm });
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps.comm !== nextState.localComm) {
      this.setState({ localComm: this.props.comm });
    }
  }
  render() {
    const { classes } = this.props;
    let askName = "";
    const { currentUser } = this.props.userInfo;

    if (currentUser === qTypes.BANKER) {
      askName = this.props.userInfo.customerName;
    } else {
      askName = this.props.userInfo.bankerName;
    }
    return (
      <Card>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            {currentUser === qTypes.BANKER && (
              <img src={custAvatar} alt="..." />
            )}
            {currentUser === qTypes.CUSTOMER && <img src={avatar} alt="..." />}
          </a>
        </CardAvatar>
        <CardBody>
          {/* <GridItem xs={12} sm={12} md={12}> */}
          <i className={classes.cardCategory}>
            {currentUser === qTypes.CUSTOMER && (
              <p>
                Hello! I&apos;m Geoffrey. Please fill out the following forms
                (Click on the names)
              </p>
            )}
            {currentUser === qTypes.BANKER && <p>Hello! I&apos;m David</p>}
          </i>
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                className={classes.expanded}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Forms</Typography>
              </ExpansionPanelSummary>
              <Padding1>
                <FormNavList
                  formLinks={this.props.formsList}
                  handleFormClick={this.props.handleFormClick}
                />
              </Padding1>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                className={classes.expanded}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Borrower&apos;s Assistant</Typography>
              </ExpansionPanelSummary>
              <Padding2>
                <h4 className={classes.cardTitle}>{this.props.label}</h4>
                <p className={classes.description}>{this.props.helpTextCard}</p>
              </Padding2>
              <Button color="primary">More Information</Button>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                className={classes.expanded}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Communication</Typography>
              </ExpansionPanelSummary>
              <Padding1>
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    /*                             borderStyle: "solid",
              borderColor: "lightgray",
              borderWidth: "1px",
              borderRadius: "5px", */
                    overflow: "auto",
                    maxHeight: 100,
                    padding: "0px 5px 0px",
                    textAlign: "left"
                  }}
                >
                  {this.state.localComm.map((row, key) => {
                    let borrower;
                    if (typeof row.lender == "undefined") {
                      borrower = true;
                    } else {
                      borrower = false;
                    }
                    if (borrower) {
                      return (
                        <p key={key}>
                          <strong>{row.borrower}:</strong>&nbsp;{row.text}
                        </p>
                      );
                    } else {
                      return (
                        <p key={key}>
                          <strong>{row.lender}:</strong>&nbsp;{row.text}
                        </p>
                      );
                    }
                  })}
                </div>

                <TextField
                  id="standard-textarea"
                  label={"Ask " + askName}
                  placeholder="Communication"
                  multiline
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  value={this.state.commText}
                  onChange={this.handleChange}
                />
                <Button
                  variant="outlined"
                  fullWidth
                  size="small"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Padding1>
            </ExpansionPanel>
          </div>
          {/* </GridItem> */}
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    formsList: state.formsList,
    userInfo: state.userInfo
  };
};
export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(FormSidePanel))
);
