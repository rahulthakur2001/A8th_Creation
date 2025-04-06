import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../Slices/authSlice"
import postApi from "../APIs/Postapi";

const loginUser = (email,password) => async(dispatch) =>{
    dispatch(loginStart());

    try{
        const response = await postApi('auth/login',{email,password});
        if(response && response.data && response.data.success){
            dispatch(
                loginSuccess({
                    user:response.data.user,
                    token:response.data.token,
                })
            )
        }else{
            dispatch(loginFailure('Login failed: Invalid credentials or other error.'));
        }
    }catch(error){
        const errorMessage = error?.response?.data?.message || error.message || 'An unknown error occurred';
        dispatch(loginFailure(errorMessage));  
    }
}

export default loginUser;