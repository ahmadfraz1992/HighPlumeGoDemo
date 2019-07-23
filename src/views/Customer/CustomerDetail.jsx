/* eslint-disable no-dupe-keys */
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import avatar from "assets/img/faces/marc.jpg";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import SimpleSelect from "components/Select/SimpleSelect.jsx";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as aTypes from "../../types/ActionTypes";
import * as qTypes from "../../types/QuestionTypes";
import Hidden from "@material-ui/core/Hidden";

const styles = {
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
  }
};
class PersonalInfo extends Component {
  // function PersonalInfo(props) {

  constructor(props) {
    super(props);
    this.state = {
      helpTextCard: "",
      companyHelpText: "What is the name of your business entity?",
      label: "",
      anchorEl: null,
      typeOfBiz: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.FindAbsoluteIndex = this.FindAbsoluteIndex.bind(this);
    this.qprocess = this.qprocess.bind(this);
    this.qprocess = this.qprocess.bind(this);
  }

  qprocess(index) {
    this.setState({
      helpTextCard: this.props.fields[index].text,
      label: this.props.fields[index].label
    });
    this.props.dispatch({
      type: aTypes.SET_CURRENT_STATE,
      current_state: { type: qTypes.INDIVIDUAL_INFORMATION, index: index }
    });
  }

  handleClick(e) {
    let index = parseInt(e.target.id, 10);
    this.qprocess(this.FindAbsoluteIndex(index));
  }

  FindAbsoluteIndex(relativeIndex) {
    let i = 0;
    for (i = 0; i < this.props.fields.length; i++) {
      if (
        this.props.fields[i].type === qTypes.INDIVIDUAL_INFORMATION &&
        this.props.fields[i].index === relativeIndex
      ) {
        return i;
      }
    }
  }
  /*   handleClick(e) {
    if (e.target.id == "company") {
      this.qprocess(0);
    } else if (e.target.id == "dba") {
      this.qprocess(1);
    } else if (e.target.id == "type-of-business") {
      this.qprocess(2);
    } else if (e.target.id == "EIN") {
      this.qprocess(3);
    } else if (e.target.id == "business-do") {
      this.qprocess(4);
    } else if (e.target.id == "address") {
      this.qprocess(5);
    } else {
      this.setState({
        helpTextCard: e.target.value,
        label: "Country"
      });
    }
  } */

  render() {
    const { classes, customers } = this.props;
    const data = [
      { value: customers[0].id, text: customers[0].name },
      { value: customers[1].id, text: customers[1].name },
      { value: customers[2].id, text: customers[2].name },
      { value: customers[3].id, text: customers[3].name }
    ];
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <p className={classes.cardCategoryWhite}>Customer</p>
              </CardHeader>
              <CardBody>
                <SimpleSelect
                  data={data}
                  selected={this.props.selected_customer_id}
                  label="Customer Name"
                />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(0)].label
                      }
                      id="0"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(1)].label
                      }
                      id="1"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(2)].label
                      }
                      id="2"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(3)].label
                      }
                      id="3"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(4)].label
                      }
                      id="4"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(5)].label
                      }
                      id="5"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(6)].label
                      }
                      id="6"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(7)].label
                      }
                      id="7"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={
                        this.props.fields[this.FindAbsoluteIndex(8)].label
                      }
                      id="8"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Set up an appointment</Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Hidden smDown implementation="css">
              <Card>
                <CardBody>
                  <i className={classes.cardCategory}>
                    Hello! I&apos;m Geoffrey. Please click on the chat link for
                    more help.
                  </i>
                  <h4 className={classes.cardTitle}>{this.state.label}</h4>
                  <p className={classes.description}>
                    {this.state.helpTextCard}
                  </p>
                  <Button color="primary" round>
                    More Information
                  </Button>
                </CardBody>
              </Card>
            </Hidden>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_state: state.current_state,
    fields: state.fields,
    selected_customer_id: state.selected_customer_id,
    customers: state.customers
  };
};
export default connect(mapStateToProps)(withStyles(styles)(PersonalInfo));
