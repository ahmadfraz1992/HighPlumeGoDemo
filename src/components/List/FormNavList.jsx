/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import { connect } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextButton from "components/CustomButtons/TextButton.jsx";
import Button from "@material-ui/core/Button";
import {
  primaryColor,
  successColor,
  grayColor,
  infoColor,
  roseColor
} from "assets/jss/material-dashboard-react.jsx";

class FormNavList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //    this.handleClick = this.handleClick.bind(this);
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiList: {
          root: {
            width: "100%",
            maxWidth: 360,
            position: "relative",
            overflow: "auto",
            maxHeight: "150px"
          }
        },
        MuiListItem: {
          root: {
            width: "100%!important"
          },
          gutters: {
            paddingLeft: "5px",
            paddingRight: "5px"
          },
          dense: {
            paddingTop: "0px",
            paddingBottom: "0px"
          }
        },
        MuiButton: {
          textPrimary: {
            color: grayColor[1]
          },
          textSecondary: {
            color: roseColor[1]
          }
        }
      },
      typography: {
        useNextVariants: true
      }
    });

  render() {
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <List dense>
          {this.props.formLinks.map((link, key) => {
            if (link.alert == true) {
              return (
                <ListItem key={key}>
                  <TextButton
                    color="secondary"
                    size="small"
                    id={key}
                    key={key}
                    onClick={this.props.handleFormClick}
                  >
                    {link.name}
                  </TextButton>
                </ListItem>
              );
            } else {
              return (
                <ListItem key={key}>
                  <TextButton
                    color="primary"
                    size="small"
                    id={key}
                    key={key}
                    onClick={this.props.handleFormClick}
                  >
                    {link.name}
                  </TextButton>
                </ListItem>
              );
            }
          })}
        </List>
      </MuiThemeProvider>
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

export default withRouter(connect(mapStateToProps)(FormNavList));
