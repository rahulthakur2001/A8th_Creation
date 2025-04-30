import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loder from "../components/Loader/Loder";

// Protect routes for any authenticated user
const ProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? element : <Navigate to="/login" replace />;
};

// Protect routes for Admins only
const AdminProtected = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return <Loder/>;

  const isAdmin = user?.role?.includes("Admin");
  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { ProtectedRoute, AdminProtected };
