import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    color: "red"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 160
  }
});

class SimpleSelect extends React.Component {
  state = {
    addpar: this.props.selected
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="addpar-auto-width">
            {this.props.label}
          </InputLabel>
          <Select
            value={this.state.addpar}
            onChange={this.handleChange}
            inputProps={{
              name: "addpar",
              id: "addpar-auto-width"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {data.map((row, key) => {
              return (
                <MenuItem key={key} value={row.value}>
                  {row.text}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
