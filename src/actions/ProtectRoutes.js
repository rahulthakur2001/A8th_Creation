import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectRoute = ({ children }) => {
  const token = useSelector(state => state.auth.token); 
  const navigate = useNavigate();

  if (!token) {
    return navigate('/login');  
  }

  return children; 
};

export default ProtectRoute;
