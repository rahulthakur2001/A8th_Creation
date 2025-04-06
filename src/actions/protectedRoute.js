import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = useSelector((state) => state.auth.token) || Cookies.get('token');

  return (
    <Route
      {...rest}
      element={token ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
