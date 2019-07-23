import React, { Component } from "react";
import classnames from "classnames";
import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import FormSidePanel from "Container/FormSidePanel.jsx";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }

  render() {
    const { cardCategory, cardTitle, description } = dashboardStyle;
    return (
      <div
        className={classnames("fixed-plugin", {
          "rtl-fixed-plugin": this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-eye fa-3x" style={{ color: "GAINSBORO" }} />
          </div>
          <ul className="dropdown-menu">
            <div style={{ maxHeight: "600px" }}>
              <FormSidePanel
                label={this.props.label}
                helpTextCard={this.props.helpTextCard}
                commText={this.props.commText}
                handleFormClick={this.props.handleFormClick}
                comm={this.props.comm}
                commAbsIndex={this.props.commAbsIndex}
                currIndex={this.props.currIndex}
                loadCustomerData={this.props.loadCustomerData}
              />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
