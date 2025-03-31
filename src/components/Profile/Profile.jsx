import React from 'react'
import { ToastContainer } from 'react-toastify/unstyled';
import { toast } from 'react-toastify';
import Getapi from '../../APIs/Getapi';

const Profile = () => {
    const LogoutApi = async () => {
        try {
            const response = await Getapi("auth/logout", { withCredentials: true });
    
            console.log(response);
            toast.success(response.data.message);
        } catch (e) {
            if (e.response) {
                toast.error(e.response.data.message || "An error occurred during logout.");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };
    

    const handleLogout = () => {
        LogoutApi();
    };

    return (
        <div>
            <ToastContainer />
            <h1>User Profile</h1>
            <p>Welcome to your profile page.</p>
            <p>Here you can manage your account settings, view your recent activity, and access your personalized dashboard.</p>
            <button>Edit Profile</button>
            <br />
            <button className='bg-amber-900' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
