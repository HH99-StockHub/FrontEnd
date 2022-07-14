//action
const TOGGLE_STATE = "addArticle/TOGGLE_STATE";
const CHART_TOGGLE = "moreChart/CHART_TOGGLE";

// action creator
export const togleState = (payload) => ({ type: TOGGLE_STATE, payload });
export const chartToggleState = (payload) => ({ type: CHART_TOGGLE, payload });
const initialState = {
  toggleState: false,
  chartToggle: false,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATE:
      return { ...state, toggleState: action.payload };
    case CHART_TOGGLE:
      return { ...state, chartToggle: action.payload };
    default:
      return state;
  }
};

export default toggleReducer;
