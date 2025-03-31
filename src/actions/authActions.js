export const setAuthData = (token, user) => {
    return {
      type: 'SET_AUTH_DATA',
      payload: { token, user },
    };
  };
  
  export const removeAuthData = () => {
    return {
      type: 'REMOVE_AUTH_DATA',
    };
  };
  