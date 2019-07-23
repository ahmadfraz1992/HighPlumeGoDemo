import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { gray } from "@material-ui/core/colors";

import Checkbox from "@material-ui/core/Checkbox";
import { grayColor, blackColor } from "../assets/jss/material-dashboard-react";

const radioStyles = theme => ({
  root: {
    "&$checked": {
      color: "#3D70B2"
    }
  },
  checked: {}
});

const CustomRadio = withStyles(radioStyles)(Radio);

const styles = {
  root: {
    color: blackColor[400],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: "a"
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* <CustomRadio name="radio-button-demo" /> */}
        <Radio
          checked={this.state.selectedValue === "a"}
          onChange={this.handleChange}
          value="a"
          //   color="primary"
          name="radio-button-demo"
          aria-label="A"
          icon={<RadioButtonUncheckedIcon fontSize="large" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="large" />}
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <Radio
          checked={this.state.selectedValue === "b"}
          onChange={this.handleChange}
          value="b"
          //color="secondary"
          name="radio-button-demo"
          aria-label="B"
          icon={<RadioButtonUncheckedIcon fontSize="large" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="large" />}
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <Radio
          checked={this.state.selectedValue === "c"}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          icon={<RadioButtonUncheckedIcon fontSize="large" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="large" />}
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <Radio
          checked={this.state.selectedValue === "d"}
          onChange={this.handleChange}
          value="d"
          //color="default"
          name="radio-button-demo"
          aria-label="D"
          icon={<RadioButtonUncheckedIcon fontSize="large" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="large" />}
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
