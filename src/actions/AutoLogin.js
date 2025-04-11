import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../Slices/authSlice";
import Getapi from "../APIs/Getapi";

const AutoLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await Getapi('auth/me');

        if (res.data.success) {
          dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
        } else {
          dispatch(loginFailure("Not logged in"));
        }
      } catch (err) {
        dispatch(loginFailure("Session expired or not logged in"));
      }
    };

    fetchUser();
  }, [dispatch]);

  return null;
};

export default AutoLogin;
