//action

const LOGIN = "login/LOGIN";

// action creator
export const loginState = (payload) => ({ type: LOGIN, payload });

//초기값
const initialState = {
  loginState: false,
};

// reducer

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginState: action.payload };
    default:
      return state;
  }
};

export default userReducer;
