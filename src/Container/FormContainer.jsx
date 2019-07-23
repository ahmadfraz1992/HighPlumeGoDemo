import React, { Component } from "react";
import { connect } from "react-redux";
import * as qTypes from "types/QuestionTypes";
import Form from "Container/Form.jsx";
import FormWithTable from "Container/FormWithTable.jsx";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let showForm = true;
    if (this.props.current_state.type === qTypes.GENERAL_INFORMATION)
      showForm = true;
    else if (this.props.current_state.type === qTypes.INDIVIDUAL_INFORMATION)
      showForm = true;
    else if (this.props.current_state.type === qTypes.ASSETS) showForm = false;
    else if (this.props.current_state.type === qTypes.LIABILITIES)
      showForm = false;
    else if (this.props.current_state.type === qTypes.INCOME_EXPENDITURES)
      showForm = false;
    if (showForm) {
      return (
        <div>
          <Form />
        </div>
      );
    } else {
      return (
        <div>
          <FormWithTable />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    current_state: state.current_state
  };
};
export default connect(mapStateToProps)(FormContainer);
