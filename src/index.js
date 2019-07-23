import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import CustomerHeader from "layouts/CustomerHeader.jsx";
import BankAdminHeader from "layouts/BankAdminHeader.jsx";
import RTL from "layouts/RTL.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "reducers/Index";
import * as aTypes from "types/ActionTypes";
import * as qTypes from "types/QuestionTypes";

import "assets/css/material-dashboard-react.css";

const store = createStore(Reducer);

function addQandA(qtext, qlabel, qindex, qtype) {
  store.dispatch({
    type: aTypes.ADD_FIELD_INFO,
    field: {
      type: qtype,
      label: qlabel,
      text: qtext,
      index: qindex
    }
  });
}
/* function addComm(qtext, qindex, qtype) {
  store.dispatch({
    type: aTypes.ADD_COMM_INFO,
    comm: {
      text: qtext,
      index: qindex,
      type: qtype
    }
  });
} */
function addComm(qtextArr, qindex, qtype) {
  store.dispatch({
    type: aTypes.ADD_COMM_INFO,
    comm: {
      type: qtype,
      text: qtextArr,
      index: qindex
    }
  });
}
function addCustomer(id, name, templateName, dateMod) {
  store.dispatch({
    type: aTypes.ADD_CUSTOMER,
    customer: {
      id: id,
      name: name,
      template_name: templateName,
      date_mod: dateMod
    }
  });
}
function addProspect(id, name, templateName, dateMod, alert) {
  store.dispatch({
    type: aTypes.ADD_PROSPECT,
    prospect: {
      id: id,
      name: name,
      template_name: templateName,
      date_mod: dateMod,
      alert: alert
    }
  });
}

function addAssets(id, name, amount, alert) {
  store.dispatch({
    type: aTypes.ADD_ASSET,
    asset: {
      id: id,
      name: name,
      amount: amount,
      alert: alert
    }
  });
}

function addAssetsHelp(text, index) {
  store.dispatch({
    type: aTypes.ADD_ASSET_HELP,
    help: {
      text: text,
      index: index
    }
  });
}

addQandA(
  "What is the name of your legal business entity?  This needs to match exactly with your Article of Incorporation or Organization, or with your Partnership agreement.",
  "Legal Business Name",
  0,
  qTypes.GENERAL_INFORMATION
);
addQandA(
  "What is your business' trade name?  This is usually the name of the business you have on your sign or how the general public knows your business.",
  "Doing Business As",
  1,
  qTypes.GENERAL_INFORMATION
);
addQandA(
  "Is you businsss a Corporation, an LLC, an S-Corp, a Partnership or a Sole Proprietership?",
  "Type of Business",
  2,
  qTypes.GENERAL_INFORMATION
);

addQandA(
  "This is your tax id number for the business.  If you do not have one yet, you will need to establish an EIN for your company.",
  "Employer Identification Number",
  3,
  qTypes.GENERAL_INFORMATION
);

addQandA(
  "What kind of business is this?  For example, is it a restaurant, or a barbershop, or a retail sales business?  Please tell us what your business does.",
  "What does your business do?",
  4,
  qTypes.GENERAL_INFORMATION
);

addQandA(
  "What is the physical address of your business?  We need to know where the business is physically located.",
  "Address",
  5,
  qTypes.GENERAL_INFORMATION
);

addQandA("Your full name", "Name", 0, qTypes.INDIVIDUAL_INFORMATION);
addQandA(
  "Your permanent home street address",
  "Address",
  1,
  qTypes.INDIVIDUAL_INFORMATION
);
addQandA(
  "Your country of residency",
  "Country",
  2,
  qTypes.INDIVIDUAL_INFORMATION
);
addQandA("Your postal code", "Postal Code", 3, qTypes.INDIVIDUAL_INFORMATION);
addQandA(
  "Your position in the company and your occupation",
  "Position",
  4,
  qTypes.INDIVIDUAL_INFORMATION
);
addQandA(
  "Length of your tenure at the company",
  "Length of Employment",
  5,
  qTypes.INDIVIDUAL_INFORMATION
);
addQandA(
  "Your home phone number",
  "Home Phone",
  6,
  qTypes.INDIVIDUAL_INFORMATION
);
addQandA(
  "Your mobile phone number",
  "Moble Phone",
  7,
  qTypes.INDIVIDUAL_INFORMATION
);
addQandA(
  "Your work phone number",
  "Work Phone",
  8,
  qTypes.INDIVIDUAL_INFORMATION
);

addComm(
  [
    { lender: "Geoffrey", text: "Please provide documentation" },
    { borrower: "David", text: "Can you give a list of documents?" },
    { lender: "Geoffrey", text: "Will do tomorrow" },
    { lender: "Geoffrey", text: "And one more thing" }
  ],
  0,
  qTypes.GENERAL_INFORMATION
);
addComm([], 1, qTypes.GENERAL_INFORMATION);
addComm([], 2, qTypes.GENERAL_INFORMATION);
addComm([], 3, qTypes.GENERAL_INFORMATION);
addComm([], 4, qTypes.GENERAL_INFORMATION);
addComm([], 5, qTypes.GENERAL_INFORMATION);

addComm([], 0, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 1, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 2, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 3, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 4, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 5, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 6, qTypes.INDIVIDUAL_INFORMATION);
addComm([], 7, qTypes.INDIVIDUAL_INFORMATION);

addCustomer("1000001", "Dewey Pharmacy", "Retail-1", "2019-03-07");
addCustomer("1000002", "Burny's Que", "Restaurant-3", "2019-02-08");
addCustomer(
  "1000003",
  "Curl up and Dye Hair Salon",
  "Retail-Specialized-1",
  "2018-11-26"
);
addCustomer("1000004", "MusicJolt", "Custom", "2018-09-09");
addCustomer("1000005", "Junker Works", "Software-1", "2019-07-023");
addCustomer(
  "1000006",
  "AA Liquor Market",
  "Retail-Specialized-2",
  "2019-04-11"
);
addCustomer("1000007", "Ditcher Law", "Practice-2", "2019-03-15");

addProspect("100234", "SwipeWire", "Software-1", "2019-01-19", false);
addProspect("100239", "David's Donuts", "Retail-1", "2018-11-15", false);
addProspect("100289", "Doctor Rooto", "Retail-2", "2019-03-04", false);
addProspect("100302", "A-1 Cleaning Supplies", "Retail-1", "2019-02-11", false);
addProspect("100304", "Dwellsmith", "Custom", "2019-03-15", false);
addProspect("100305", "Tyco Taco", "Restaurant-2", "2019-01-01", false);
addProspect("100308", "Hair Today", "Retail-2", "2018-12-15", false);

store.dispatch({
  type: aTypes.SET_CURRENT_STATE,
  current_state: { type: qTypes.GENERAL_INFORMATION, index: 0 }
});

store.dispatch({
  type: aTypes.ADD_FORMS_LIST,
  formsList: [
    { name: "General Information", alert: false },
    { name: "Individual Information", alert: true },
    { name: "Assets Schedule", alert: false },
    { name: "Liabilities", alert: false },
    { name: "Income & Expenditures", alert: false },
    { name: "Contingent Liabilites", alert: false },
    { name: "Marketable Securites Schedule", alert: false },
    { name: "Non-marketable Secutities Schedule", alert: false },
    { name: "Real Estate Schedule", alert: false },
    { name: "Life Insurance Schedule", alert: false },
    { name: "Credit Obligations Schedule", alert: false },
    { name: "Business Ventures", alert: false },
    { name: "Sign-off & Disclaimer", alert: false },
    { name: "Liabilities", alert: false }
  ]
});

addAssets("2000021", "Cash on hand", "$0", false);
addAssets("2000023", "US Gov. & Marketable Securities", "$0", false);
addAssets("2000024", "Non-Marketable Securities", "$0", false);
addAssets("2000025", "Restricted, Controlled and Retirement", "$0", false);
addAssets("2000026", "Real Estate Owned", "$0", false);
addAssets("2000027", "Automobiles", "$0", false);
addAssets("2000028", "Other Assets", "$0", false);
addAssets("2000029", "Accounts, Notes, & Notes Receivable", "$0", false);
addAssets("2000030", "Other Personal Property", "$0", false);
addAssets("2000031", "Cash Surrender Value of Life Insurance", "$0", false);
addAssets("2000032", "Busniness Ventures", "$0", false);

addAssetsHelp(
  "The normal course dollar balance of cash held in financial institutions. This is calculated as an average balance over 3 or 6 months, and incorporates any known/expected changes to cash balances (ie. known significant expenditures). Includes personal and business checking & savings that are not included as Assets of the business in the business ventures portion of this statement. Be sure not to double count Assets or Liabilities.",
  0
);
addAssetsHelp(
  "Financial securities that can be easily liquidated , such debt issued by the government. This includes Treasury Bills/Notes/Bonds, Municipal Debt, Government Sponsored Entities (GSE) Debt, State & Municipal Bonds, Common & Preferred Stock, Money Market, Certificates of Deposit, Commercial Bonds & Paper, Options, Futures, Rights & Warrants, Investment Trusts. It is important to include the names of other individuals named on any of these accounts, or the entity through which you own securities (ie. Joe Smith Trust).",
  1
);
addAssetsHelp(
  "Uncommon for the majority of individuals. These are Financial Instruments & Securities that are difficult to buy or sell; lack a major market or primarily transact privately or over-the-counter (OTC). An example would be shares in a private enterprise such as an oil well or pipeline. If Non-Marketable Securities are applicable, be sure that these values are NOT also included in the business ventures portion of the statement.",
  2
);
addAssetsHelp(
  "The sum of 401-k IRA, Keogh, Profit-Sharing & Other Vested Retirement accounts recognized by the IRS. Be sure to include the value of retirement accounts from previous employers that may not have been rolled over to current accounts.",
  3
);
addAssetsHelp(
  "All real property with the exception of property included in the business ventures portion of this statement as an asset of the business. Be sure not to double count Assets or Liabilities. Address of Property: Street Address, City, State, Zip Code. Should sum to Real Estate Schedule Total.",
  4
);
addAssetsHelp(
  "Personal Autos, or autos that are not incorporated in the business balance sheet for business included on this statement. Reasonable value can be found utilizing resources such as Kelly Blue Book.",
  5
);
addAssetsHelp(
  "Can be other miscellaneous items that have significant value. Any sort of Other or Intangible Assets that have no other place on this statement for their value to be reflected.",
  6
);
addAssetsHelp(
  " Amounts you have extended personally to another individual or business",
  7
);
addAssetsHelp(
  "This is where you should include miscellaneous items that hold a meaningful amount of value. A good rule of thumb is to specifically consider any items that have value greater than 5% of the total loan amount.",
  8
);
addAssetsHelp(
  "A feature of permanent life insurance policies, such as Whole Life, Universal Life, Variable Universal Life, and Indexed Universal Life. Cash Surrender Value of Life Insurance is not the same as the face value of life insurance. Consult your life insurance policy to determine the surrender value of the policy, and be sure to include any other named individuals on the policy. Depending on your loan product, an important consideration is the requirement of an “assignment of life insurance”; discuss this with your banker to see if this applies.",
  9
);

addComm(
  [
    { lender: "Geoffrey", text: "Please provide documentation" },
    { borrower: "David", text: "Can you give a list of documents?" },
    { lender: "Geoffrey", text: "Will do tomorrow" },
    { lender: "Geoffrey", text: "And one more thing" }
  ],
  0,
  qTypes.ASSETS
);
addComm([], 1, qTypes.ASSETS);
addComm([], 2, qTypes.ASSETS);
addComm([], 3, qTypes.ASSETS);
addComm([], 4, qTypes.ASSETS);
addComm([], 5, qTypes.ASSETS);
addComm([], 6, qTypes.ASSETS);
addComm([], 7, qTypes.ASSETS);
addComm([], 8, qTypes.ASSETS);
addComm([], 9, qTypes.ASSETS);
addComm([], 10, qTypes.ASSETS);

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/customer" component={CustomerHeader} />
        <Route path="/bankadmin" component={BankAdminHeader} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/customer/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
