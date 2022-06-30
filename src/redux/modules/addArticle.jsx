//action
const TOGGLE_STATE = "addArticle/TOGGLE_STATE";

// action creator
export const togleState = (payload) => ({ type: TOGGLE_STATE, payload });

const initialState = {
  toggleState: false,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STATE:
      return { ...state, toggleState: action.payload };
    default:
      return state;
  }
};

export default toggleReducer;
