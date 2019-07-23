// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import avatar from "assets/img/faces/marc.jpg";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import SimpleSelect from "components/Select/SimpleSelect.jsx";
import Button from "@material-ui/core/Button";
import FormNavList from "components/List/FormNavList.jsx";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as aTypes from "../../types/ActionTypes";
import * as qTypes from "../../types/QuestionTypes";
import Hidden from "@material-ui/core/Hidden";
import FieldsView from "../../components/Fields/FieldsView";

import { createMuiTheme } from "@material-ui/core/styles";

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
  constructor(props) {
    super(props);
    this.state = {
      helpTextCard: "",
      companyHelpText: "What is the name of your business entity?",
      label: "",
      anchorEl: null,
      typeOfBiz: "",
      fieldData: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.FindAbsoluteIndex = this.FindAbsoluteIndex.bind(this);
    this.qprocess = this.qprocess.bind(this);
    this.qprocess = this.qprocess.bind(this);
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiListItem: {
          root: {
            color: "red"
          },
          gutters: {
            paddingLeft: "5px",
            paddingRight: "5px"
          },
          dense: {
            paddingTop: "0px",
            paddingBottom: "0px"
          }
        }
      },
      typography: {
        useNextVariants: true
      }
    });

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
    this.loadFields(qTypes.INDIVIDUAL_INFORMATION);
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
                  Individual (&amp; Additional Parties) Information
                </p>
              </CardHeader>
              <CardBody>
                <SimpleSelect
                  data={data}
                  selected={this.props.selected_customer_id}
                  label="Additonal Party"
                />
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
                  <FormNavList
                    formLinks={[
                      "General Information",
                      "Individual Information"
                    ]}
                  />
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
    selected_customer_id: state.selected_customer_id
  };
};
export default connect(mapStateToProps)(withStyles(styles)(PersonalInfo));
