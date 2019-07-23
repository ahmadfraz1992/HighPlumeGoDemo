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
      typeOfBiz: "",
      data: []
    };
  }

  /*   transformData() {
    let i;
    let fieldTriplet = new Array(3);

    for (i = 0; i < this.props.fieldData.length; i++) {
      let subIndex = i % 3; //iterats 0 through 2
      while (subIndex !== 0 && i !== 0) {
        fieldTriplet[subIndex] = this.props.fieldData[i];
      }
    }
  }

  UNSAFE_componentWillMount() {
    this.transformData();
  } */

  render() {
    debugger;
    return (
      <div>
        <GridContainer>
          {this.props.fieldData.map((row, key) => {
            let createGridContainer = key % 3 === 0 && key !== 0;
            let snippet;
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={key}>
                <GridItem key={key} xs={12} sm={12} md={12}>
                  <CustomInput
                    key={key}
                    labelText={this.props.fieldData[key].label}
                    id={key.toString()}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onClick: this.props.handleClick
                    }}
                  />
                </GridItem>
                {snippet}
              </div>
            );
          })}
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fields: state.fields
  };
};
export default connect(mapStateToProps)(withStyles(styles)(PersonalInfo));
