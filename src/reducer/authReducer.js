import Cookies from 'js-cookie';

const initialState = {
  token: Cookies.get('token') || null,  // Get token from cookies initially
  user: null,  
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_DATA':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'REMOVE_AUTH_DATA':
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
