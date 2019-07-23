/**
 * Created by Hugh on 10/13/2018.
 */
import * as types from "types/ActionTypes";
import * as qTypes from "types/QuestionTypes";

const initialState = {
  fields: [],
  assets: [],
  comm: [],
  current_state: {
    type: qTypes.GENERAL_INFORMATION,
    index: 1,
    title: "General Information"
  },
  selected_customer_id: "",
  customers: [],
  formsList: [],
  prospects: [],
  userInfo: {
    customerName: "David",
    bankerName: "Geoffrey",
    currentUser: qTypes.CUSTOMER
  },
  assetHelp: []
  //  userInfo: { name: "John", role: qTypes.CUSTOMER }
};

const postReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_STATE:
      return Object.assign({}, state, { current_state: action.current_state });

    case types.ADD_FIELD_INFO:
      state.fields.push(action.field);
      return state;

    case types.SET_SELECTED_CUSTOMER_ID:
      return Object.assign({}, state, {
        selected_customer_id: action.selected_customer_id
      });

    case types.ADD_CUSTOMER:
      state.customers.push(action.customer);
      return state;

    case types.ADD_FORMS_LIST:
      return Object.assign({}, state, {
        formsList: action.formsList
      });

    case types.ADD_COMM_INFO:
      state.comm.push(action.comm);
      return state;

    case types.UPDATE_COMM_INFO:
      state.comm[action.comm.index].text = action.comm.text;
      return state;

    case types.ADD_PROSPECT:
      state.prospects.push(action.prospect);
      return state;

    case types.UPDATE_PROSPECT:
      state.prospects[action.prospect.index].alert = action.prospect.alert;
      return state;

    case types.ADD_ASSET:
      state.assets.push(action.asset);
      return state;

    case types.UPDATE_ASSET:
      state.assets[action.asset.index].alert = action.asset.alert;
      return state;

    case types.ADD_ASSET_HELP:
      state.assetHelp.push(action.help);
      return state;

    case types.UPDATE_USER:
      return Object.assign({}, state, {
        userInfo: action.userInfo
      });

    default:
      return state;
  }
};

export default postReducer;
