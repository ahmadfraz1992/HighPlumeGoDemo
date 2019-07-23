import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  primaryColor,
  successColor,
  grayColor,
  infoColor,
  roseColor
} from "assets/jss/material-dashboard-react.jsx";
// We can inject some CSS into the DOM.
const styles = {
  root: {
    textTransform: "none"
  },
  text: {
    padding: "2px 4px"
  }
};

function TextButton(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button
      className={classNames(classes.root, classes.text, className)}
      {...other}
    >
      {children}
    </Button>
  );
}

TextButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(TextButton);
