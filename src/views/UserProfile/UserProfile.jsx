import InputLabel from "@material-ui/core/InputLabel";
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

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as aTypes from "../../types/ActionTypes";
import * as qTypes from "../../types/QuestionTypes";
import Hidden from "@material-ui/core/Hidden";
import FieldsView from "../../components/Fields/FieldsView";
import FormNavList from "components/List/FormNavList.jsx";

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
class UserProfile extends Component {
  // function UserProfile(props) {

  constructor(props) {
    super(props);
    this.state = {
      helpTextCard: "",
      companyHelpText: "What is the name of your business entity?",
      label: "",
      /*       anchorEl: null,
      typeOfBiz: "", */
      fieldData: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.qprocess = this.qprocess.bind(this);
  }

  /*   handleClick2 = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null, typeOfBiz: event.target.textContent });
  }; */

  //----------------
  qprocess(index) {
    this.setState({
      helpTextCard: this.props.fields[index].text,
      label: this.props.fields[index].label
    });
    this.props.dispatch({
      type: aTypes.SET_CURRENT_STATE,
      current_state: { type: qTypes.GENERAL_INFORMATION, index: index }
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
        this.props.fields[i].type === qTypes.GENERAL_INFORMATION &&
        this.props.fields[i].index === relativeIndex
      ) {
        return i;
      }
    }
  }

  loadFields(fieldType) {
    let i = 0;
    for (i = 0; i < this.props.fields.length; i++) {
      if (this.props.fields[i].type === fieldType) {
        this.state.fieldData.push({
          label: this.props.fields[i].label,
          text: this.props.fields[i].text
        });
      }
    }
  }

  UNSAFE_componentWillMount() {
    this.loadFields(qTypes.GENERAL_INFORMATION);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <p className={classes.cardCategoryWhite}>
                  Please tell us a little bit about your business
                </p>
              </CardHeader>
              <CardBody>
                <FieldsView
                  fieldData={this.state.fieldData}
                  handleClick={this.handleClick}
                />
              </CardBody>
              <CardFooter>
                <Button color="primary">Set up an appointment</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Hidden smDown implementation="css">
              <Card>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <i className={classes.cardCategory}>
                    Hello! I&apos;m Geoffrey. Please click on the chat link for
                    more help.
                  </i>
                  <h4 className={classes.cardTitle}>{this.state.label}</h4>
                  <p className={classes.description}>
                    {this.state.helpTextCard}
                  </p>
                  <FormNavList formLinks={["General Information","Individual Information"]} />
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

  /*   render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <p className={classes.cardCategoryWhite}>
                  Please tell us a little bit about your business
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText={this.props.fields[0].label}
                      id="company"
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
                      labelText={this.props.fields[1].label}
                      id="dba"
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
                      labelText={this.props.fields[2].label}
                      id="type-of-business"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onClick: this.handleClick,
                        value: this.state.typeOfBiz
                      }}
                    />


                    
                    <div>
                      <Button
                        color="primary"
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick2}
                      >
                        Select Type
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                      >
                        <MenuItem onClick={this.handleClose}>LLC</MenuItem>
                        <MenuItem onClick={this.handleClose}>S-Corp</MenuItem>
                        <MenuItem onClick={this.handleClose}>
                          Partnership
                        </MenuItem>
                      </Menu>
                    </div>



                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={this.props.fields[3].label}
                      id="EIN"
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
                      labelText={this.props.fields[4].label}
                      id="business-do"
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
                      labelText={this.props.fields[5].label}
                      id="address"
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
                      labelText="Country"
                      id="country"
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
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      What else?
                    </InputLabel>
                    <CustomInput
                      labelText="Tell us any other relavant or interesting information about your business"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
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
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
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
  } */
}

const mapStateToProps = state => {
  return {
    current_state: state.current_state,
    fields: state.fields,
    selected_customer_id: state.selected_customer_id
  };
};
export default connect(mapStateToProps)(withStyles(styles)(UserProfile));
